import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import "./AllProducts.css";
import GrainSampler from "../../assets/grainSampler.jpg";
import CottonBag from "../../assets/cottonBag.jpg";
import WeightMachine from "../../assets/weight_machine.avif";
import Electric from "../../assets/electric.jpg";
import Nilemalitre from "../../assets/gab_315.jpg"
import Bölücü from '../../assets/gab_310.jpg';
import Hektolitre from '../../assets/gab_300.jpg';

const AllProducts = () => {
  return (
    <>
      <Header />
      <section className="about" id="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <img
                src={GrainSampler}
                alt="about"
                className="img-fluid"
                width="100%"
              />
            </div>
            <div className="col-lg-6">
              <h3>MSB GAB-306 Numune Alma Sondası </h3>
              <p>
                MSB MARKASININ GAB-306 MODELİDİR.Cihaz sahip olduğu güçlü vakum
                motoruyla buğday, arpa, çeltik, çavdar, yulaf gibi tahılların
                yanı sıra, mısır, fasulye, nohut gibi ağır ürünleri de pnömatik
                (vakumla) olarak 9 ila 12 saniyede laboratuvar ya da numune
                odasındaki numune toplama kabına biriktirmektedir. Üzerinde
                saydam penceresi olan numune toplama kabıyla, numune miktarı
                takip edilebilmekte, istenirse numune alma miktarı
                ayarlanabilmektedir. Numune kabı siklon yapısında olmadığı için
                filtresi yoktur. Dolayısıyla sık sık filtre değişimine gerek
                duymaz. Güçlü ve ağır gövdesinin salınım miktarı, 4 adet bayrak
                direkleri sayesinde çok azaltılmıştır. Cihazın numune alma kolu
                (boom) iç ve dış boom olarak iki kısımdan oluşur istenildiği
                takdrde 3 boma kadarda uzatılabilir. İç boom dış boomun içinden
                hidrolik olarak çıkarılarak numune alma mesafesi çok uzatılmış
                olmaktadır. Böylece cihaz sağında ve solunda 5,5 metrelik alan
                olmak üzere toplam 11 metrelik alanı tarayabilmektedir. Böylece
                cihazın araçlara çok yakın mesafeye montaj zorunluluğu ortadan
                kalkmaktadır. Ayrıca uzun kamyonlarda ve çekicilerde dahi araç
                hareket ettirilmeden rahatlıkla numune alınabilmektedir. Prob
                uzunluğu 2,5 m. Numune alma sondası 120 derece sağa ve 120
                derece sola olmak üzere toplam 240 derece hareket
                edebilmektedir. Joystick sayesinde hem kontrol odasından hem de
                araç yakınından kumanda edilebilmektedir. Cihaz joyistiğiyle tüm
                hareketleri kolayca yapabilmektedir. Cihaz sağ, sol, yukarı,
                aşağı, ileri ve geri hareketlerin tamamını elektrik motorlarıyla
                değil çok daha kuvvetli, hızlı, sessiz ve uzun ömürlü olan
                hidrolik sistemle yaptığı için kullanım kolaylığı vardır.
                Cihazın dış ölçüleri 75x75x400 cm dir. Cihaz net ağırlığı 530 kg
                dır. Kullanım hataları hariç 2 yıl garanti ve 10 yıl yedek parça
                temin garantisi vardır.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="about" id="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <img
                src={WeightMachine}
                alt="about"
                className="img-fluid"
                width="100%"
              />
            </div>
            <div className="col-lg-6">
              <h3>Hassas Terazi </h3>
              <p>
                0,01 hassasiyettedir. Başta gıda, tahıl ve yem sektörü olmak
                üzere bir çok sektor için çok değişik hassasiyet ve kapasitede
                terazilerimiz kullanılmaktadır. Un fabrikalarında sıklıkla,
                gluten, sedim, index tartımları ve genel tartımlar için
                kullanılmaktadır. Kullanım hataları hariç 2 yıl garanti ve 10
                yıl yedek parça temin garantisi vardır.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="about" id="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <img
                src={CottonBag}
                alt="about"
                className="img-fluid"
                width="100%"
              />
            </div>
            <div className="col-lg-6">
              <h3>MSB GAB-300 Numune Saklama Torbası </h3>
              <p>
                30 cm uzunluğunda 15 cm eninde lisanslı depolarada sahit
                numunenin saklanmasında kullanılan kullanılan torbadır.Şahit
                numunenin rutubetlenmemesi için tamamen kaput bezinden
                üretilmiştir. Ortalama 3 kg civarında buğday ve mısır
                almaktadır.Her bir paketin içinden 25 adet çıkmaktadır.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="about" id="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <img
                src={Electric}
                alt="about"
                className="img-fluid"
                width="100%"
              />
            </div>
            <div className="col-lg-6">
              <h3>MSB GAB-301 Şahit Numune Mührü </h3>
              <p>
                Şahit numunelere numara vermek için lisanslı depolarda mecburi
                olarak kullanılmakta olan bir üründür.Numune torbasının ağzını
                kapatmak için ürün sahibine verilen bir kod gibi kullanılır
                paket de 1000 adet olarak paketlenir.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="about" id="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <img
                src={Nilemalitre}
                alt="about"
                className="img-fluid"
                width="100%"
              />
            </div>
            <div className="col-lg-6">
              <h3>MSB GAB-315 Nilemalitre </h3>
              <p>
                Tahılların ağırlığını ve yoğunluğunu ölçmek için kullanılır.
                Cihaz; buğday, pirinç, mısır, mercimek ve benzeri tahıllarda
                Nilemalitre ölçmek için kullanılır. Buğdayda Nilemalitre
                testinin amacı un verimini tahmin etmektir. Buğdayın
                Nilemalitresi arttığında un verimi de artmaktadır. Nilemalitre
                değeri: tanenin şekli, yoğunluğu, büyüklüğü ve yeknesaklığına
                göre değişkenlik gösterir. Ölçüm kabı, dolum kabı, bıçak ve
                dijital terazi olmak üzere 4 kısımdan oluşmaktadır. TSE ye uygun
                sert pirinç malzemeden ve krom kaplı bakır, paslanmaz çelik ve
                alüminyumdan üretilmiştir. Cihazımız ISO 7971- 3 standardına
                uygundur. Portatiftir, rahatlıkla taşınabilmektedir. Cihazın
                bıçağı paslanmaz çelikten üretilmektedir. Dijital terazili
                olduğu için, uzun ayarlama ve tartımlar gerektirmemektedir.
                Pratiktir, sonuçları kesindir. Kullanım hataları hariç 2 yıl
                garanti, 10 yıl yedek parça garantisi vardır.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="about" id="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <img
                src={Bölücü}
                alt="about"
                className="img-fluid"
                width="100%"
              />
            </div>
            <div className="col-lg-6">
              <h3>MSB GAB-310 Masaüstü Numune Bölücü</h3>
              <p>
                Cihaz analizi yapılacak ürünün homojen bir şekilde iki eşit
                parçaya bölünmesini sağlar. Analizi yapılacak numune cihazın üst
                kısmındaki dolum kabına konulur ve altında bulunan besleme
                haznesine boşaltılır. Burada bulunan ayrı bölümlerden geçerek
                numune iyice karışır ve iki kısma ayrılır. İkiye bölünen
                numuneler ayrı çekmecelerde toplanır. Bu numunelerden yapılan
                paralel (çifte) analizlerde birbirine çok yakın sonuçlar
                alınması sağlanmış olur. Cihazın tüm parçaları paslanmaz
                malzemeden imal edilmiştir. Hayat boyu paslanmazlık garantisi
                vardır. Kullanım kolaylığı vardır, ergonomiktir. Kullanım
                hataları hariç 2 yıl garanti, 10 yıl yedek parça garantisi
                vardır.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="about" id="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <img
                src={Hektolitre}
                alt="about"
                className="img-fluid"
                width="100%"
              />
            </div>
            <div className="col-lg-6">
              <h3>MSB GAB-300 Hektolitre</h3>
              <p>
                Tahılların yoğunluğunu ölçmek için kullanılır. Cihaz; buğday,
                arpa, mısır ve benzeri tahıllarda hektolitre ölçmek için
                kullanılır. Buğdayda hektolitre testinin amacı un verimini
                tahmin etmektir. Buğdayın hektolitresi arttığında un verimi de
                artmaktadır. Hektolitre değeri: tanenin şekli, yoğunluğu,
                büyüklüğü ve yeknesaklığına göre değişkenlik gösterir. Ölçüm
                kabı, dolum kabı, şamandıra, bıçak ve dijital terazi olmak üzere
                5 kısımdan oluşmaktadır. TSE'ye uygun çekme pirinç malzemeden
                üretilmiştir. Cihazımız ISO 7071-3 standartlarına uygundur. Tüm
                parçalar birbirinden ayrılabilir, portatiftir, rahatlıkla
                taşınabilmektedir. Cihazın bıçağı paslanmaz çelikten
                üretilmektedir. Dijital terazili olduğu için, uzun ayarlama ve
                tartımlar gerektirmemektedir. Kullanım hataları hariç 2 yıl
                garanti ve 10 yıl yedek parça temin garantisi vardır.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AllProducts;
