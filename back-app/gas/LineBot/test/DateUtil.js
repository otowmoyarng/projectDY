function DateUtilTest_Convert() {
    const params = [undefined, null, "202202", "202201/10", "2022/01", "2022/02/22"];
    params.forEach(param => {
        const result = DateUtil.Convert(param);
        if (result === null) {
            console.log(`param:${param}, result:${result}`);
        } else {
            console.log(`param:${param}, result:${DateUtil.GetCurrentYmd(result)}`);
        }
    });
}