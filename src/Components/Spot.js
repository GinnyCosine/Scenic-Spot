import React, { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  margin-bottom: 50px;
  font-family: 'Poppins', -apple-system, sans-serif;
`;

const Main = styled.div`
  width: 100%;
  color: #353535;
  border-radius: 10px;
  border-color: #e0e0e0;
  border-style: solid;
  border-width: 2px;
  background-color: #fff;
  font-size: 17px;
  padding: .5rem 3%;
  box-sizing: border-box;
`;

const Name = styled.div`
  padding: 10px 0;
  font-size: 25px;
  font-weight: 600;
`;

const Title = styled.div`
  color: #fff;
  background-color: #3fbbc3;
  padding: 3px 10px;
  display: block;
  width: fit-content;
  border-radius: 20px;
`;

const Content = styled.div`
  color: #353535;
  display: block;
  padding: 5px 10px;
`;

const ShowButton = styled.div`
  cursor: pointer;
  color: #575757;
  font-size: 15px;
  padding: 5px 0px;
  display: block;
  :hover{
    color: #777777;
  }
`;

const Spot = (props) => {
  const [show, setShow] = useState(false);
  const {
    name,
    description,
    openTime,
    ticketInfo,
    travelInfo,
    address,
    phone
  } = props;
  return (
    <Wrapper>
      <Main>
        <Name>{name}</Name>
        <Title>簡介</Title>
        <Content>{description}</Content>
        <Title>地點</Title>
        <Content>{address}</Content>
        {
          show && (
            <>
              {
                openTime !== undefined &&
                (
                  <>
                    <Title>開放時間</Title>
                    <Content>{openTime}</Content>
                  </>
                )
              }
              {
                phone !== undefined &&
                (
                  <>
                    <Title>電話</Title>
                    <Content>{phone}</Content>
                  </>
                )
              }
              {
                ticketInfo !== undefined &&
                (
                  <>
                    <Title>票價</Title>
                    <Content>{ticketInfo}</Content>
                  </>
                )
              }
              {
                travelInfo !== undefined &&
                (
                  <>
                    <Title>交通方式</Title>
                    <Content>{travelInfo}</Content>
                  </>
                )
              }
            </>
          )
        }
        <ShowButton onClick={() => { setShow(!show) }}>{show ? 'Close' : 'See More . . .'}</ShowButton>
      </Main>
    </Wrapper>
  )
}

export default Spot;
