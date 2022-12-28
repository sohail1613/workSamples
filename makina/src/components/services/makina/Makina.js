import React from "react";
import "./Makina.css";
import GrainSampler from "../../../assets/complete_probe.png";

const Makina = () => {
  return (
    <>
      <div className="makina">
        <div className="image-section">
          <a href="#">
            <img src={GrainSampler} />
          </a>
        </div>

        <div className="description-section">
          <span>
            MSB MARKASININ GAB-306 MODELİDİR.Cihaz sahip olduğu güçlü vakum
            motoruyla buğday, arpa, çeltik, çavdar, yulaf gibi tahılların yanı
            sıra, mısır, fasulye, nohut gibi ağır ürünleri de pnömatik (vakumla)
            olarak 9 ila 12 saniyede laboratuvar ya da numune odasındaki numune
            toplama kabına biriktirmektedir. Üzerinde saydam penceresi olan
            numune toplama kabıyla, numune miktarı takip edilebilmekte,
            istenirse numune alma miktarı ayarlanabilmektedir. Numune kabı
            siklon yapısında olmadığı için filtresi yoktur. Dolayısıyla sık sık
            filtre değişimine gerek duymaz. Güçlü ve ağır gövdesinin salınım
            miktarı, 4 adet bayrak direkleri sayesinde çok azaltılmıştır.
            Cihazın numune alma kolu (boom) iç ve dış boom olarak iki kısımdan
            oluşur istenildiği takdrde 3 boma kadarda uzatılabilir. İç boom dış
            boomun içinden hidrolik olarak çıkarılarak numune alma mesafesi çok
            uzatılmış olmaktadır. Böylece cihaz sağında ve solunda 5,5 metrelik
            alan olmak üzere toplam 11 metrelik alanı tarayabilmektedir. Böylece
            cihazın araçlara çok yakın mesafeye montaj zorunluluğu ortadan
            kalkmaktadır. Ayrıca uzun kamyonlarda ve çekicilerde dahi araç
            hareket ettirilmeden rahatlıkla numune alınabilmektedir. Prob
            uzunluğu 2,5 m. Numune alma sondası 120 derece sağa ve 120 derece
            sola olmak üzere toplam 240 derece hareket edebilmektedir. Joystick
            sayesinde hem kontrol odasından hem de araç yakınından kumanda
            edilebilmektedir. Cihaz joyistiğiyle tüm hareketleri kolayca
            yapabilmektedir. Cihaz sağ, sol, yukarı, aşağı, ileri ve geri
            hareketlerin tamamını elektrik motorlarıyla değil çok daha kuvvetli,
            hızlı, sessiz ve uzun ömürlü olan hidrolik sistemle yaptığı için
            kullanım kolaylığı vardır. Cihazın dış ölçüleri 75x75x400 cm dir.
            Cihaz net ağırlığı 530 kg dır. Kullanım hataları hariç 2 yıl garanti
            ve 10 yıl yedek parça temin garantisi vardır.
          </span>
        </div>
      </div>
    </>
  );
};

export default Makina;
