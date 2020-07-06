# -*- coding: utf-8 -*-
import codecs
import datetime
import json
import typing
from webscraping import Scraper

class OperationForecastBase:
    """[summary]
    OperationForecastBase
        運行予測日を取得する基底クラス
    """

    # urlプロパティ
    url_ = ''
    
    # soupプロパティ
    soup_ = None

    def __init__(self, url : str):
        """[summary]
        コンストラクタ
            プロパティをセットする
        argument:
            url URL
        """
        self.url_ = url
        self.soup_ = Scraper.scraping(self.url_)
    
    def extractData(self, table : object) -> typing.Dict[str, str]:
        """[summary]
        table
            <table>タグからデータを抽出する
        Args:
            table (BeautifulSoup.element.Tag): <table>タグ

        Returns:
            Dict[str, str]: 抽出したデータ
        """
        return None

class OperationForecastDY(OperationForecastBase):
    """[summary]
    OperationForecastDY
        ドクターイエローの運行予測日を取得するクラス
    """

    # TODO デバッグモードではスクレイピング結果をJSONに追加して、トレースできるようにする。
    # tagプロパティ
    tag_ = ''

    def __init__(self, url : str, urlparam : str =None):
        """[summary]
        コンストラクタ
            プロパティをセットする
        argument:
            url         URL
            urlparam    URLパラメータ
        """

        # urlparamがなければ現在年月をYYYYMM形式でセット
        if urlparam is None:
            self.tag_ = datetime.datetime.now().strftime('%Y%m')
        else:
            self.tag_ = urlparam

        # URLの末尾が/でないなら/を追加する
        sepalate_str = ""
        if not url.endswith("/"):
            sepalate_str = "/"
        
        target_url = url + sepalate_str + self.tag_
        super().__init__(target_url)

    def convertdate(self, datevalue : str) -> str:
        """[summary]
        日付を含む文字列をYYYY/MM/DD形式に変換します。
        Args:
            datevalue (str): 日付を含む文字列
        Returns:
            str: 日付 YYYY/MM/DD形式
        """
        year = datetime.date.today().year

        # 月を抽出する
        month = datevalue.split('月')[0]
        if len(month) == 1:
            month = '0' + month
        
        # 日を抽出する
        day = datevalue.split('月')[1].split('日')[0]
        if len(day) == 1:
            day = '0' + day

        date = f'{year}/{month}/{day}'
        return date
    
    def convertweek(self, datevalue : str) -> str:
        """[summary]
        日付を含む文字列から曜日を抽出します。
        Args:
            datevalue (str): 日付を含む文字列
        Returns:
            str: 曜日 月･火･水･木･金･土･日
        """
        week = datevalue.split('（')[1]
        return week[0]

    def extractData(self) -> typing.Dict[str, str]:
        """[summary]
        table
            <table>タグからデータを抽出する
        Returns:
            Dict[str, str]: 抽出したデータ
        """

        isHeaderSkipped = False
        datalist = {}
        datakey = ("trainname", "direction", "date")

        # <tr>タグの数だけループしてデータを抽出する
        table = self.soup_.section.find_all("table")[0]
        rows = table.findAll('tr')
        
        for row in rows:

            # 先頭行はヘッダー行なので読み飛ばす
            if not isHeaderSkipped:
                isHeaderSkipped = True
                continue

            index = 0
            elements = {}
            for cell in row.findAll('td'):

                # 日付を変換する
                if "date" == datakey[index]:
                    elements[datakey[index]] = self.convertdate(cell.get_text())
                    elements['week'] = self.convertweek(cell.get_text())
                else:
                    elements[datakey[index]] = cell.get_text()
                index += 1

                # 最終行の場合はbreak
                if len(datakey) == index:
                    break
            
            data_index = 'row' + str(len(datalist))
            datalist[data_index] = elements
        
        datalist['tag'] = self.tag_
        return datalist

if __name__ == "__main__":

    test_url = "https://xn--eckit8d4bznvdd3177e33ybsr0e.jp/time-table"
    instance = OperationForecastDY(test_url, '202006')

    print(instance.extractData())
    json.dump(instance.extractData(), codecs.open('extractData.json', mode='w', encoding='utf-8'), ensure_ascii=False, indent=4)