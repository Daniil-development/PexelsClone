import React from 'react';
import Searchbar from "./Searchbar";

const Header = () => {
    return (
        <header style={{justifyContent : "center", alignItems:"center"}}
                    className="HeroHeader_hero__9b_DM Flex_flex__wNlof spacing_noMargin__Q_PsJ spacing_padding-top-80__Uf7Vy spacing_padding-right-15__jQups spacing_padding-bottom-80__hIl_I spacing_padding-left-15__7m7Ub">
        <div
            className="HeroHeader_content__Q_Ahy Flex_flex__wNlof Flex_flex-direction-column__ZHBzC spacing_noMargin__Q_PsJ spacing_padding-top-50__mVooT">
            <h1 className="Text_text___5YSC Text_size-h33__ZHVtg Text_color-whiteFFFFFF__EmFLN spacing_noMargin__Q_PsJ">The
                best free stock photos, royalty free images &amp; videos shared by creators.</h1>
            <div className={"spacing_margin-top-30__4kMc2"}>
                <Searchbar/>
            </div>
            <div
                className="HeroHeader_trendingSearches__YlnIT spacing_noMargin__Q_PsJ spacing_margin-top-30__4kMc2">
                    <span
                        className="Text_text___5YSC Text_size-p16__Obkrs Text_weight-semibold__jKPqr Text_color-whiteFFFFFF__EmFLN spacing_noMargin__Q_PsJ spacing_margin-right-8__NbSjT HeroHeader_trendingSearchesText__OBEPZ Text_inline__oInmV">Trending:</span>
                <ul className="HeroHeader_trendingSearchesList__RnyDy">
                    <li><a
                        className="Text_text___5YSC Text_size-p16__Obkrs Text_weight-semibold__jKPqr Text_color-whiteFFFFFF__EmFLN spacing_noMargin__Q_PsJ Text_inline__oInmV Link_link__mTUkz clickable_clickable__Klxi1 spacing_noMargin__Q_PsJ"
                        href="/client/src/components/Header.js"><span
                        className="Text_text___5YSC Text_size-inherit__DoyiI Text_size-inherit-mobile__c_MEf Text_weight-inherit__1YUgt Text_color-inherit__DYpjg spacing_noMargin__Q_PsJ Text_inline__oInmV">car</span></a><span
                        className="Text_text___5YSC Text_size-p16__Obkrs Text_color-whiteFFFFFF__EmFLN spacing_noMargin__Q_PsJ Text_inline__oInmV">,&nbsp;</span>
                    </li>
                    <li><a
                        className="Text_text___5YSC Text_size-p16__Obkrs Text_weight-semibold__jKPqr Text_color-whiteFFFFFF__EmFLN spacing_noMargin__Q_PsJ Text_inline__oInmV Link_link__mTUkz clickable_clickable__Klxi1 spacing_noMargin__Q_PsJ"
                        href="/client/src/components/Header.js"><span
                        className="Text_text___5YSC Text_size-inherit__DoyiI Text_size-inherit-mobile__c_MEf Text_weight-inherit__1YUgt Text_color-inherit__DYpjg spacing_noMargin__Q_PsJ Text_inline__oInmV">food</span></a><span
                        className="Text_text___5YSC Text_size-p16__Obkrs Text_color-whiteFFFFFF__EmFLN spacing_noMargin__Q_PsJ Text_inline__oInmV">,&nbsp;</span>
                    </li>
                    <li><a
                        className="Text_text___5YSC Text_size-p16__Obkrs Text_weight-semibold__jKPqr Text_color-whiteFFFFFF__EmFLN spacing_noMargin__Q_PsJ Text_inline__oInmV Link_link__mTUkz clickable_clickable__Klxi1 spacing_noMargin__Q_PsJ"
                        href="/client/src/components/Header.js"><span
                        className="Text_text___5YSC Text_size-inherit__DoyiI Text_size-inherit-mobile__c_MEf Text_weight-inherit__1YUgt Text_color-inherit__DYpjg spacing_noMargin__Q_PsJ Text_inline__oInmV">business</span></a><span
                        className="Text_text___5YSC Text_size-p16__Obkrs Text_color-whiteFFFFFF__EmFLN spacing_noMargin__Q_PsJ Text_inline__oInmV">,&nbsp;</span>
                    </li>
                    <li><a
                        className="Text_text___5YSC Text_size-p16__Obkrs Text_weight-semibold__jKPqr Text_color-whiteFFFFFF__EmFLN spacing_noMargin__Q_PsJ Text_inline__oInmV Link_link__mTUkz clickable_clickable__Klxi1 spacing_noMargin__Q_PsJ"
                        href="/client/src/components/Header.js"><span
                        className="Text_text___5YSC Text_size-inherit__DoyiI Text_size-inherit-mobile__c_MEf Text_weight-inherit__1YUgt Text_color-inherit__DYpjg spacing_noMargin__Q_PsJ Text_inline__oInmV">nature</span></a><span
                        className="Text_text___5YSC Text_size-p16__Obkrs Text_color-whiteFFFFFF__EmFLN spacing_noMargin__Q_PsJ Text_inline__oInmV">,&nbsp;</span>
                    </li>
                    <li><a
                        className="Text_text___5YSC Text_size-p16__Obkrs Text_weight-semibold__jKPqr Text_color-whiteFFFFFF__EmFLN spacing_noMargin__Q_PsJ Text_inline__oInmV Link_link__mTUkz clickable_clickable__Klxi1 spacing_noMargin__Q_PsJ"
                        href="/client/src/components/Header.js"><span
                        className="Text_text___5YSC Text_size-inherit__DoyiI Text_size-inherit-mobile__c_MEf Text_weight-inherit__1YUgt Text_color-inherit__DYpjg spacing_noMargin__Q_PsJ Text_inline__oInmV">beach</span></a>
                    </li>
                    <li><a
                        className="HeroHeader_ellipsis__0xjbM Link_link__mTUkz clickable_clickable__Klxi1 spacing_noMargin__Q_PsJ spacing_margin-left-8__qpANg"
                        href="/client/src/components/Header.js">
                        <svg className="Icon_color-whiteFFFFFF__LjcUS spacing_noMargin__Q_PsJ" viewBox="0 0 24 24"
                             width="24" height="24">
                            <use xlinkHref="#more_horiz-2eade203b098366b612487ee18fcc928"></use>
                        </svg>
                    </a></li>
                </ul>
            </div>
        </div>
        <img
            src="https://images.pexels.com/photos/16736610/pexels-photo-16736610.jpeg?auto=compress&amp;cs=tinysrgb&amp;fit=crop&amp;h=500&amp;w=1400&amp;dpr=1"
            srcSet="https://images.pexels.com/photos/16736610/pexels-photo-16736610.jpeg?auto=compress&amp;cs=tinysrgb&amp;fit=crop&amp;h=500&amp;w=350 350w, https://images.pexels.com/photos/16736610/pexels-photo-16736610.jpeg?auto=compress&amp;cs=tinysrgb&amp;fit=crop&amp;h=500&amp;w=500 500w, https://images.pexels.com/photos/16736610/pexels-photo-16736610.jpeg?auto=compress&amp;cs=tinysrgb&amp;fit=crop&amp;h=500&amp;w=1000 1000w, https://images.pexels.com/photos/16736610/pexels-photo-16736610.jpeg?auto=compress&amp;cs=tinysrgb&amp;fit=crop&amp;h=500&amp;w=1500 1500w, https://images.pexels.com/photos/16736610/pexels-photo-16736610.jpeg?auto=compress&amp;cs=tinysrgb&amp;fit=crop&amp;h=500&amp;w=2000 2000w, https://images.pexels.com/photos/16736610/pexels-photo-16736610.jpeg?auto=compress&amp;cs=tinysrgb&amp;fit=crop&amp;h=500&amp;w=2500 2500w, https://images.pexels.com/photos/16736610/pexels-photo-16736610.jpeg?auto=compress&amp;cs=tinysrgb&amp;fit=crop&amp;h=500&amp;w=3000 3000w, https://images.pexels.com/photos/16736610/pexels-photo-16736610.jpeg?auto=compress&amp;cs=tinysrgb&amp;fit=crop&amp;h=500&amp;w=3500 3500w, https://images.pexels.com/photos/16736610/pexels-photo-16736610.jpeg?auto=compress&amp;cs=tinysrgb&amp;fit=crop&amp;h=500&amp;w=4000 4000w, https://images.pexels.com/photos/16736610/pexels-photo-16736610.jpeg?auto=compress&amp;cs=tinysrgb&amp;fit=crop&amp;h=500&amp;w=4500 4500w, https://images.pexels.com/photos/16736610/pexels-photo-16736610.jpeg?auto=compress&amp;cs=tinysrgb&amp;fit=crop&amp;h=500&amp;w=5000 5000w"
            alt="" className="spacing_noMargin__Q_PsJ HeroHeader_img__eYIFQ"/><a
        className="Text_text___5YSC Text_size-p14__OI9CQ Text_weight-semibold__jKPqr Text_color-whiteFFFFFF__EmFLN spacing_noMargin__Q_PsJ HeroHeader_attribution__MN2os Text_inline__oInmV Link_link__mTUkz clickable_clickable__Klxi1 spacing_noMargin__Q_PsJ"
        href="client/src/components/Header.js"><p
        className="Text_text___5YSC Text_size-inherit__DoyiI Text_size-inherit-mobile__c_MEf Text_weight-inherit__1YUgt Text_color-inherit__DYpjg spacing_noMargin__Q_PsJ Text_inline__oInmV">
                <span
                    className="Text_text___5YSC Text_size-inherit__DoyiI Text_size-inherit-mobile__c_MEf Text_color-inherit__DYpjg spacing_noMargin__Q_PsJ HeroHeader_attributionLabel__Uq1a6 Text_inline__oInmV">Photo by</span>&nbsp;
        <span
            className="Text_text___5YSC Text_size-inherit__DoyiI Text_size-inherit-mobile__c_MEf Text_color-inherit__DYpjg spacing_noMargin__Q_PsJ Text_inline__oInmV">Rodion Kutsaiev</span>
    </p></a></header>
    );
};

export default Header;