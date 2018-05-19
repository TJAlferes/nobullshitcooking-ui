import styled from 'styled-components';

export const Styles = styled.div`
  #search_form {
    display: flex;
    flex-flow: row;
    width: 100%;
    min-width: 320px;
    height: 32px;
    margin: 7px auto 0 auto;
    float: left;
    border-style: solid;
    border-width: 1px;
    border-radius: 1px;
    border-top-color: #777;
    border-right-color: #aaa;
    border-bottom-color: #aaa;
    border-left-color: #777;
    /*border: 1px inset #bfbfbf;*/
  }

  #search_left {position: relative; order: 1; display: block; width: auto; height: 30px; float: none;}
  #search_category {position: relative; width: auto; max-width: 100%; height: 30px;}
  #search_facade {position: relative; float: left; width: auto; height: 30px; border-style: solid; border-width: 1px; border-radius: 1px;
  border-top-color: #fff; border-right-color: #888; border-bottom-color: #888; border-left-color: #fff; background-image: linear-gradient(to bottom, #eee, #bbb);}
  #facade_text {width: auto; margin-right: 21px; margin-left: 8px; line-height: 30px; font-size: 1.3rem; color: #666;}
  #facade_arrow {position: absolute; top: 12px; right: 7px;}
  #search_category select {position: absolute; display: block; left: 0; height: 30px; width: auto; font-family: Arial, sans-serif; margin: 0; border: 0; padding: 0; cursor: pointer; opacity: 0;}
  #search_category select option {}

  #search_mid {}
  #search_insert {position: relative; order: 2; flex: 1; display: block; width: 100%; height: 30px; float: none;}
  #search_insert_input {position: absolute; top: 0; left: 0; display: block; width: 100%; font-family: Arial, sans-serif;
  margin: 0; border: 0; padding: 3px 10px 3px 0; height: 30px; -webkit-appearance: none; box-shadow: none; text-indent: 5px;}
  #search_auto_suggestions {position: absolute; top: 30px; left: 0; display: none; width: 100%; height: 175px; z-index: 4; background: white; padding: 5px; border-top: 1px solid black;}
  #search_auto_suggestions_shadow {position: absolute; top: 92px; left: 0; display: none; width: 0px; height: 0px; z-index: 2; box-shadow: 0 0 0 2000px rgba(0, 0, 0, .5);}
  .search_suggestion_row {display: block; width: inherit; padding: 8px; cursor: pointer; cursor: hand;}
  .search_suggestion_row:hover {background: #ddd;}
  .search_suggestion_row a {width: inherit; text-decoration: none; font-family: Arial, sans-serif; font-size: 1.5rem; font-weight: 700; color: black; cursor: pointer; cursor: hand;}
  .search_suggestion_row mark {background-color: inherit; font-weight: 100;}

  #search_right {}
  #search_execute {order: 3; display: block; width: auto; height: 30px; float: none;}
  #search_execute_input {width: auto; max-width: 100%; height: 30px; padding-left: 8px; padding-right: 8px;
  border-style: solid; border-width: 1px; border-radius: 1px; border-top-color: #ddd; border-right-color: #666; border-bottom-color: #666; border-left-color: #ddd;
  background-image: linear-gradient(to bottom, #b8dbfb, #68abe6); line-height: 30px; font-size: 1.3rem; color: #111; cursor: pointer;}
  #search_execute_input:hover {background-image: linear-gradient(to bottom, #98c6f1, #509fe4);}
`;