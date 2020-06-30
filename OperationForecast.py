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
    
    # TODO プロパティへのアクセッサ―を作成する

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
            urlparam = datetime.datetime.now().strftime('%Y%m')
        
        # URLの末尾が/でないなら/を追加する
        sepalate_str = ""
        if not url.endswith("/"):
            sepalate_str = "/"
        
        target_url = url + sepalate_str + urlparam
        super().__init__(target_url)

    def extractData(self) -> typing.Dict[str, str]:
        """[summary]
        table
            <table>タグからデータを抽出する
        Returns:
            Dict[str, str]: 抽出したデータ
        """

        isHeaderSkipped = False
        datalist = {}
        datakey = ("trainname", "start-st", "date")

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
                elements[datakey[index]] = cell.get_text()
                index += 1

                # 日付を変換する
                if "date" == datakey[index]:
                    converted_date = ""
                    elements[datakey[index]] = converted_date

                # 最終行の場合はbreak
                if len(datakey) == index:
                    break
            
            data_index = 'row' + str(len(datalist))
            datalist[data_index] = elements

        return datalist

if __name__ == "__main__":

    test_url = "https://xn--eckit8d4bznvdd3177e33ybsr0e.jp/time-table"
    instance = OperationForecastDY(test_url)

    # # 全出力
    # print(soup, file=codecs.open('output-all.html', 'w', 'utf-8'))
    # # 運行予測日があるsectionタグを出力
    # # print(type(soup.section))
    # print(soup.section, file=codecs.open('output-section.html', mode='w', encoding='utf-8'))
    # # 運行予測日があるsectionタグを出力
    # table = instance.soup_.section.find_all("table")[0]
    # print(table, file=codecs.open('output-section-table.html', mode='w', encoding='utf-8'))
    print(instance.extractData())
    json.dump(instance.extractData(), codecs.open('extractData.json', mode='w', encoding='utf-8'), ensure_ascii=False, indent=4)