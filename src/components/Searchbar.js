import React from 'react';

const Searchbar = () => {
    return (
        <form role="search" autoComplete="off" className="SearchBar_form__UONcq spacing_noMargin__Q_PsJ">
            <div className="SearchInput_container__jnRxK SearchInput_shrinkOnMobile__hO8A5">
                <div className="TooltipShell_container__ROul9 SearchInput_tooltip__AZOH7">
                    <button
                        className="Button_button__L4pRn spacing_noMargin__Q_PsJ spacing_padding-right-20__Q3ufi spacing_padding-left-20__GcW24 SearchInput_contentType__hsTac Button_clickable__WBdod Button_white__snM9f Button_colorOverrideBlack__uYMP4"
                        type="button"><span className=""><svg className="spacing_noMargin__Q_PsJ"
                                                              viewBox="0 0 16 16" width="16" height="16"><use
                        xlinkHref="#image_outline-eb5e80fa8b4b19a3114294781046ad8c"></use></svg><span
                        className="Button_text__mn5Ou">Photos</span><svg
                        className="Icon_color-greyMinus1BFBFBF__x1Jbf spacing_noMargin__Q_PsJ"
                        viewBox="0 0 24 24" width="24" height="24"><use
                        xlinkHref="#expand_more-d498cb17085731dcecc2a43193842281"></use></svg></span></button>

                </div>
                <input className="SearchInput_input__UT7ss Navbar_searchBar__g0ewv" id="search"
                       autoCapitalize="none" autoComplete="off" name="s" data-testid="search-input"
                       placeholder="Search for free photos" type="search"/>
                <button className="SearchInput_button__dQPLk">
                    <svg className="spacing_noMargin__Q_PsJ" viewBox="0 0 24 24" width="24" height="24">
                        <use xlinkHref="#search-bd8e50c200501dff8322340f6275033b"></use>
                    </svg>
                </button>
            </div>
        </form>
    );
};

export default Searchbar;