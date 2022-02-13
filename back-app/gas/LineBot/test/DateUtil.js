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

function DateUtilTest_PreviewMonth() {
    const params = ["2021/12/10", "2022/01/01", "2022/02/22"];
    params.forEach(param => {
        console.log(`${param} -> ${DateUtil.GetCurrentYmd(DateUtil.PreviewMonth(DateUtil.Convert(param)))}`);
    });
}

function DateUtilTest_NextMonth() {
    const params = ["2021/11/15", "2021/12/10", "2022/01/31"];
    params.forEach(param => {
        console.log(`${param} -> ${DateUtil.GetCurrentYmd(DateUtil.NextMonth(DateUtil.Convert(param)))}`);
    });
}