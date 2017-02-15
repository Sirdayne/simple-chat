$(document).ready(function(){
    
    // НАВИГАЦИЯ
    Vue.component('component-header', {
      template: `<div class="navigation">
            <div class="wrap">
				<div class="burger">
					<div class="brg-1"></div>
					<div class="brg-2"></div>
					<div class="brg-3"></div>
				</div>
				
                <a href="index.html"><div class="nav-logo"><img src="./img/logo-header.png" alt=""></div></a>

                <div class="nav-center">
                    <div class="nav"><a href="index.html">ГЛАВНАЯ</a><span class="nav-line"></span></div>
                    <div class="nav nav-modal">
                        УСЛУГИ<span class="nav-line"></span>
                        <div class="nav-services">
                            <div class="nav-s"><a href="jalousie_roll.html">ИЗГОТОВЛЕНИЕ РОЛЛШТОР</a></div>
                            <div class="nav-s"><a href="sew.html">ИНДИВИДУАЛЬНЫЙ ПОШИВ ШТОР</a></div>
                            <div class="nav-s"><a href="decor_panels.html">ПРОДАЖА ДЕКОРАТИВНЫХ ПАНЕЛЕЙ</a></div>
                            <div class="nav-s"><a href="wallpapers.html">ДИЗАЙНЕРСКИЕ ОБОИ</a></div>
                            <div class="nav-s"><a href="floor_slabs.html">НАПОЛЬНЫЕ ПЛИТЫ</a></div>
                            <div class="nav-s"><a href="business.html">ДЛЯ БИЗНЕСА</a></div>
                            <div class="nav-s"><a href="dealers.html">ДЛЯ ДИЛЕРОВ</a></div>
                        </div>
                    </div>
                    <!--<div class="nav"><a href="">ДОПОЛНИТЕЛЬНЫЕ<br>УСЛУГИ</a></div>-->
                    <div class="nav"><a href="about.html">О НАС</a><span class="nav-line"></span></div>
                    <div class="nav"><a href="discounts.html">АКЦИИ И ЦЕНЫ</a><span class="nav-line"></span></div>
                    <div class="nav"><a href="types.html">ВИДЫ ШТОР</a><span class="nav-line"></span></div>
                    <div class="nav"><a href="portfolio.html">ПОРТФОЛИО</a><span class="nav-line"></span></div>
                    <div class="nav"><a href="news.html">НОВОСТИ</a><span class="nav-line"></span></div>
                    <div class="nav"><a href="reviews.html">ОТЗЫВЫ</a><span class="nav-line"></span></div>
                    <div class="nav"><a href="contacts.html">КОНТАКТЫ</a><span class="nav-line"></span></div>
                </div>

                <div class="nav-tel">
                    <a href="tel:+87172250426">8(7172)25-04-26</a>
                </div>
            </div>
        </div>`
    })
    
    // НАВИГАЦИЯ В ФУТЕРЕ
    Vue.component('component-footer', {
      template: `<footer class="footer">

                <div class="wrap footer-center">

                    <div class="footer-part">
                        <div class="footer-logo">
                            <img src="./img/logo-footer.png" alt="">
                        </div>
                    </div>

                    <div class="footer-part">
                        <div class="f-nav"><a href="index.html">ГЛАВНАЯ</a></div>
                        <div class="f-nav"><a href="about.html">О НАС</a></div>
                        <div class="f-nav"><a href="discounts.html">АКЦИИ И ЦЕНЫ</a></div>
                        <div class="f-nav"><a href="types.html">ВИДЫ ШТОР</a></div>
                        <div class="f-nav"><a href="portfolio.html">ПОРТФОЛИО</a></div>
                        <div class="f-nav"><a href="news.html">НОВОСТИ</a></div>
                        <div class="f-nav"><a href="reviews.html">ОТЗЫВЫ</a></div>
                        <div class="f-nav"><a href="contacts.html">КОНТАКТЫ</a></div>
                    </div>


                    <div class="footer-part">
                        <div class="f-contacts footer-mob-none">КОНТАКТЫ</div>

                        <div class="f-contacts f-con-margin">КАЗАХСТАН. Г.АСТАНА,</div>
                        <div class="f-contacts">ПО АДРЕСУ УЛ. КУНАЕВА, Д. 35/1, КВ. 3,</div>
                        <div class="f-contacts">ТЕЛ: +7 (7172) 516 520</div>
                        <div class="f-btn"><button class="btn-white jk">ВЫЗВАТЬ ДИЗАЙНЕРА</button></div>
                    </div>

                    <div class="footer-part">
                        <div class="f-contacts">ПРИСОЕДИНЯЙТЕСЬ</div>
                        <div class="f-contacts">
                            <div class="f-1"></div>
                            <div class="f-2"></div>
                            <div class="f-3"></div>
                        </div>
                    </div>
                 
                </div>
                      
                <div class="wrap">
                    <a href="http://ginnova.kz">
                    <div class="gi-logo">
                        <p>РАЗРАБОТАНО С ОСОБЫМ ТРЕПЕТОМ</p><img src="./img/gilogo.png" alt="">
                    </div>
                    </a>
                </div>
                
            </footer>`
    })
    
    // создание корневого экземпляра
    new Vue({
      el: '#header'
    })
    
    new Vue({
      el: '#footer'
    })
    
});

