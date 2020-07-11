# -*- coding: utf-8 -*-

from bs4 import BeautifulSoup
import codecs
import requests

class Scraper:
    """[summary]
    Scraper
        WEBスクレイピングを行うクラス
    """

    @staticmethod
    def scraping(url : str) -> BeautifulSoup:
        """[summary]
        scraping:
            指定したURLにwebスクレイピングを行い、その結果を返す
        argument:
            url         URL
        Returns:
            BeautifulSoup: [description]
        """

        request = requests.get(url)
        return BeautifulSoup(request.content, "html.parser")

if __name__ == "__main__":

    url = "https://xn--eckit8d4bznvdd3177e33ybsr0e.jp/time-table/202006"
    soup = Scraper.scraping(url)

    # 全出力
    print(soup, file=codecs.open('output-all.html', 'w', 'utf-8'))
    # 運行予測日があるsectionタグを出力
    # print(type(soup.section))
    print(soup.section, file=codecs.open('output-section.html', mode='w', encoding='utf-8'))
    # 運行予測日があるsectionタグを出力
    table = soup.section.find_all("table")[0]
    print(table, file=codecs.open('output-section-table.html', mode='w', encoding='utf-8'))
