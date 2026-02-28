export default function PoliciesPage() {
  return (
    <div className="container-custom py-16">
      <h1 className="mb-8 font-serif text-4xl font-bold">Politikalar</h1>

      <div className="space-y-12">
        <section>
          <h2 className="mb-4 text-2xl font-semibold">Konaklama Politikası</h2>
          <div className="prose max-w-none text-gray-700">
            <ul className="space-y-2">
              <li>Check-in: 14:00</li>
              <li>Check-out: 12:00</li>
              <li>Erken check-in ve geç check-out talepleri müsaitlik durumuna göre değerlendirilir</li>
              <li>Kimlik ibrazı zorunludur</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold">İptal Politikası</h2>
          <div className="prose max-w-none text-gray-700">
            <ul className="space-y-2">
              <li>Giriş tarihinden 48 saat öncesine kadar ücretsiz iptal</li>
              <li>48 saat içindeki iptallerde 1 gece ücreti tahsil edilir</li>
              <li>No-show durumunda toplam tutar tahsil edilir</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold">KVKK - Kişisel Verilerin Korunması</h2>
          <div className="prose max-w-none text-gray-700">
            <p className="mb-4">
              End Glory Hotel olarak, 6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında
              misafirlerimizin kişisel verilerini korumayı taahhüt ediyoruz.
            </p>
            <p>
              Toplanan veriler sadece rezervasyon ve hizmet kalitesini artırmak amacıyla kullanılır
              ve üçüncü şahıslarla paylaşılmaz.
            </p>
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold">Çerez Politikası</h2>
          <div className="prose max-w-none text-gray-700">
            <p>
              Web sitemizde kullanıcı deneyimini iyileştirmek için çerezler kullanılmaktadır.
              Çerez kullanımını tarayıcı ayarlarınızdan yönetebilirsiniz.
            </p>
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold">Gizlilik Politikası</h2>
          <div className="prose max-w-none text-gray-700">
            <p>
              Kişisel bilgileriniz güvenli sunucularda saklanır ve SSL sertifikası ile korunur.
              Ödeme bilgileriniz hiçbir zaman sistemimizde saklanmaz.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}
