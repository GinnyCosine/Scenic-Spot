import React, { PureComponent } from 'react';
import styled from 'styled-components';
import NavItem from './NavItem';

const Wrapper = styled.div`
  padding: .5rem 3%;
  box-sizing: border-box;
  width: 250px;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  background-color: #15545e;
  box-shadow: 0px 5px 6px 3px #666;
  overflow: auto;
  ::-webkit-scrollbar {
    display: none;
}
`;


export default class NavBar extends PureComponent {
  render() {
    return (
      <Wrapper>
        <NavItem
          to={"/scenicSpot"}
          text={"全部縣市"}
          exact
        />
        <NavItem
          to={"/scenicSpot/Keelung"}
          text={"基隆市"}
        />
        <NavItem
          to={"/scenicSpot/Taipei"}
          text={"臺北市"}
        />
        <NavItem
          to={"/scenicSpot/NewTaipei"}
          text={"新北市"}
        />
        <NavItem
          to={"/scenicSpot/Taoyuan"}
          text={"桃園市"}
        />
        <NavItem
          to={"/scenicSpot/HsinchuCounty"}
          text={"新竹縣"}
        />
        <NavItem
          to={"/scenicSpot/Hsinchu"}
          text={"新竹市"}
        />
        <NavItem
          to={"/scenicSpot/MiaoliCounty"}
          text={"苗栗縣"}
        />
        <NavItem
          to={"/scenicSpot/Taichung"}
          text={"臺中市"}
        />
        <NavItem
          to={"/scenicSpot/ChanghuaCounty"}
          text={"彰化縣"}
        />
        <NavItem
          to={"/scenicSpot/NantouCounty"}
          text={"南投縣"}
        />
        <NavItem
          to={"/scenicSpot/YunlinCounty"}
          text={"雲林縣"}
        />
        <NavItem
          to={"/scenicSpot/Chiayi"}
          text={"嘉義市"}
        />
        <NavItem
          to={"/scenicSpot/ChiayiCounty"}
          text={"嘉義縣"}
        />
        <NavItem
          to={"/scenicSpot/Tainan"}
          text={"臺南市"}
        />
        <NavItem
          to={"/scenicSpot/Kaohsiung"}
          text={"高雄市"}
        />
        <NavItem
          to={"/scenicSpot/PingtungCounty"}
          text={"屏東縣"}
        />
        <NavItem
          to={"/scenicSpot/YilanCounty"}
          text={"宜蘭縣"}
        />
        <NavItem
          to={"/scenicSpot/HualienCounty"}
          text={"花蓮縣"}
        />
        <NavItem
          to={"/scenicSpot/TaitungCounty"}
          text={"臺東縣"}
        />
        <NavItem
          to={"/scenicSpot/LienchiangCounty"}
          text={"連江縣"}
        />
        <NavItem
          to={"/scenicSpot/PenghuCounty"}
          text={"澎湖縣"}
        />
        <NavItem
          to={"/scenicSpot/KinmenCounty"}
          text={"金門縣"}
        />
      </Wrapper>
    )
  }
}
