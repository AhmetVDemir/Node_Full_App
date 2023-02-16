

const Footer = () => {
    return (
        <footer>
            <div className="p-10 bg-gray-800 text-gray-200">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">

                        <div className="mb-5">
                            <h4 className="text-2xl pb-4">PSYCHNONUNIVERCE</h4>
                            <p className="text-gray-500">
                                Adres: Muallimköy Mahallesi, <br />
                            Deniz Cd. No:143-5, 41400 <br />
                            Gebze/Kocaeli <br />
                            <strong>Telefon : </strong> +905555555555 <br />
                            <strong>Mail : </strong> info@PSYCHNONUNIVERCE.com <br />
                            </p>
                            
                        </div>

                        <div className="mb-5">
                            <h4>Linkler</h4>
                            <br />
                          <ul className="text-gray-500">
                            <li className="pb-4"> <a className="hover:text-yellow-500 duration-500">Ana Sayfa</a> </li>
                            <li className="pb-4"><a className="hover:text-yellow-500 duration-500">Makaleler</a></li>
                            <li className="pb-4"><a className="hover:text-yellow-500 duration-500">Hakkımızda</a></li>
                            <li className="pb-4"><a className="hover:text-yellow-500 duration-500">İletişim</a></li>
                          </ul>
                        </div>

                    </div>

                </div>


            </div>
            <div className="w-full bg-gray-900 text-gray-500 px-10">
                <div>
                    <div className="text-center">
                        <div>
                            Telif Hakkı <strong><span>PSYCHNONUNIVERCE</span></strong>. Tüm hakları saklıdır.
                        </div>
                        <div>
                            <a href="#"className="text-yellow-500">AVD</a> tarafından oluşturuldu.
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    );
}

export default Footer;