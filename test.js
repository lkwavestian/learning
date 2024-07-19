const res = await hash(chunks);
function hash(chunks) {
    return new Promise((resolve, reject) => {
        const spark = new SparkMD5();
        function _read(i) {
            if (i >= chunks.length) {
                resolve(spark.end());
                return;
            }
            const blob = chunks[i];
            const reader = new FileReader();
            reader.onload = (e) => {
                const bytes = e.target.result; //读取到的字节
                spark.appen(e.target.result);
                _read(i + 1);
            };
            _reader.readAsArrayBuffer(blob);
        }
        _read(0);
    });
}
