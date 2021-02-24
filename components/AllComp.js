export default function HeadComp() {

    
    function deneme() {
        let miktar = document.getElementById("miktar").value || 0;
        let kere = document.getElementById("kere").value || 0;
        let oran = document.getElementById("oran").value || 0;
        if(miktar != 0 && kere != 0 && oran != 0){
            document.getElementById("cevap").innerHTML = "";
            let arr = [1];
            let arr_sum = 1;
            let sum = 0;
            for (let i = 0; i < kere-1; i++) {
                sum += arr_sum;
                arr_sum = 100 / oran * sum
                console.log(arr_sum);
                arr.push(arr_sum)
            }
            sum += arr_sum;

            let gerekliPara = 0;
            for (let i = 0; i < arr.length; i++) {
                document.getElementById("cevap").innerHTML += (i+1) + ". Oynayış = " + (Math.round(((arr[i] * miktar / sum) + Number.EPSILON) * 100) / 100)  + "<br>";
                gerekliPara += (Math.round(((arr[i] * miktar / sum) + Number.EPSILON) * 100) / 100);
            }
            document.getElementById("cevap").innerHTML += "__________________+= " +  ((Math.round(((gerekliPara) + Number.EPSILON) * 100) / 100)) + "<br>";
            document.getElementById("cevap").innerHTML += "<small>" + kere + " kere kaybetme olasılığı: " + ((Math.round((100/(Math.pow(2, kere)) + Number.EPSILON) * 100) / 100)) + "<br></small>";
        }
    }


    return (
        <div className="container">
            <title>Finansta Dans</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/m-blue.png" />
            <meta name="theme-color" content="#333" />

            <div className="header">
                <h2 className="header-title">Finansta Sıfırlamaya Tam Gaz</h2>
            </div>

            <section>
                <div className="bir-kutu">
                    <label>Miktarın Nedir:</label>
                    <input id="miktar" onKeyUp={deneme} placeholder="144" min="0" type="number" className="numberinput" />
                </div>
                <div className="bir-kutu">
                    <label>Kaç Kere Deneme Hakkı İstiyorsun:</label>
                    <input id="kere" onKeyUp={deneme} placeholder="7" min="0" type="number" className="numberinput" />
                </div>
                <div className="bir-kutu">
                    <label>Grafik Oranın Nedir:</label>
                    <input id="oran" onKeyUp={deneme} placeholder="80" min="0" type="number" className="numberinput" />
                </div>

                <div className="bir-kutu p5">
                    <p id="cevap"></p>
                </div>
            </section>
        </div>
    )
}