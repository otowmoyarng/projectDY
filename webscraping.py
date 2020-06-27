# -*- coding: utf-8 -*-

import codecs
import requests
import datetime
from bs4 import BeautifulSoup

class Scraper:
    """[summary]
    Scraper
        WEBスクレイピングを行うクラス
    """

    @staticmethod
    def scraping(url : str, urlparam : str =None) -> BeautifulSoup:
        """[summary]
        scraping:
            指定したURLにwebスクレイピングを行い、その結果を返す
        argument:
            url         URL
            urlparam    URLパラメータ
        Returns:
            BeautifulSoup: [description]
        """

        # urlparamがなければ現在年月をYYYYMM形式でセット
        if urlparam is None:
            urlparam = datetime.datetime.now().strftime('%Y%m')
        
        # URLの末尾が/でないなら/を追加する
        sepalate_str = ""
        if not url.endswith("/"):
            sepalate_str = "/"
        
        target_url = url + sepalate_str + urlparam

        request = requests.get(target_url)
        return BeautifulSoup(request.content, "html.parser")

if __name__ == "__main__":

    url = "https://xn--eckit8d4bznvdd3177e33ybsr0e.jp/time-table"
    soup = Scraper.scraping(url)

    # 全出力
    print(soup, file=codecs.open('output-all.html', 'w', 'utf-8'))
    # 運行予測日があるsectionタグを出力
    print(soup.section, file=codecs.open('output-section.html', 'w', 'utf-8'))
