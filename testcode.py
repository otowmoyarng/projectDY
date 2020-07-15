# -*- coding: utf-8 -*-
import datetime
import unittest
from bs4 import BeautifulSoup
from OperationForecast import OperationForecastDY
from webscraping import Scraper

class WebscrapingTest(unittest.TestCase):
    """[summary]
    Scraperクラスのユニットテストクラス
    """

    def test_scraping(self):
        """[summary]
        staticmethod(scraping)のテストメソッド
        """
        url = "https://xn--eckit8d4bznvdd3177e33ybsr0e.jp/time-table/202006"
        soup = Scraper.scraping(url)
        self.assertEqual(type(soup), BeautifulSoup)
        self.assertIsNotNone(soup)

class OperationForecastDYTest(unittest.TestCase):
    """[summary]
    OperationForecastDYクラスのユニットテストクラス
    """

    instance = None
    date_array = ("10月12日（日）", "1月1日（月）")

    # ここから独自メソッド
    def createinstance(self, urlparam : str =None):
        """[summary]
        コンストラクタ
            OperationForecastDYのインスタンスを生成する
        argument:
            urlparam    URLパラメータ
        """
        url = "https://xn--eckit8d4bznvdd3177e33ybsr0e.jp/time-table/"
        self.instance = OperationForecastDY(url, urlparam)

    # ここからテストメソッド
    def setUp(self):
        """[summary]
        ユニットテスト実行前処理を行うメソッド
        createinstanceを実行して、テスト対象クラスのインスタンスを生成する
        """
        self.createinstance()
        
    def test_constructor(self):
        """[summary]
        コンストラクタのテストメソッド
        """

        # urlparamなし
        self.assertIsNotNone(self.instance.url_)
        self.assertIsNotNone(self.instance.soup_)
        expect_tag = datetime.datetime.now().strftime('%Y%m')
        self.assertEqual(self.instance.tag_, expect_tag)

        # urlparamあり
        urlparam = "202006"
        self.createinstance(urlparam)
        self.assertIsNotNone(self.instance.url_)
        self.assertIsNotNone(self.instance.soup_)
        expect_tag = urlparam
        self.assertEqual(self.instance.tag_, expect_tag)

    def test_convertdate(self):
        """[summary]
        convertdateのテストメソッド
        """
        expect_array = ('2020/10/12', '2020/01/01')
        expect_index = 0
        for dateval in self.date_array:
            self.assertEqual(self.instance.convertdate(dateval), expect_array[expect_index])
            expect_index += 1

    def test_convertweek(self):
        """[summary]
        convertweekのテストメソッド
        """
        expect_array = ('日', '月')
        expect_index = 0
        for dateval in self.date_array:
            self.assertEqual(self.instance.convertweek(dateval), expect_array[expect_index])
            expect_index += 1

    def test_extractData(self):
        """[summary]
        extractDataのテストメソッド
        """
        data = self.instance.extractData()
        self.assertIsNotNone(data)

if __name__ == "__main__":
    unittest.main()