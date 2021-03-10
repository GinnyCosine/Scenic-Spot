import React, { Component } from 'react';
import axios from 'axios';
import Spot from '../../Components/Spot'
import styled from 'styled-components';
import GetAuthorizationHeader from '../../Auth/AuthHeader';

const Wrapper = styled.div`
  margin-right: auto;
  margin-left: auto;
  width: 100%;
  max-width: 1140px; 
`;

export default class ScenicSpot extends Component {
  constructor(props) {
    super(props);
    this.state = {
      spotList: [],
      loading: false
    };
    this.api = this.props.all
      ? 'https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot'
      : `https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/${this.props.match.params.city}`;
    this.getSpots = this.getSpots.bind(this);
    this.checkScroll = this.checkScroll.bind(this);
  }
  componentDidMount() {
    if (this.state.spotList.length === 0) {
      this.getSpots();
    }
    document.addEventListener('scroll', this.checkScroll);
  }
  async getSpots() {
    try {
      await this.setState({ loading: true });
      const { spotList } = this.state;
      const config = { headers: GetAuthorizationHeader() };
      const response = await axios.get(
        `${this.api}?$top=30&$format=JSON&$skip=${spotList.length}`, config
      );
      if (response.status !== 200) {
        throw Error(response.statusText);
      }
      response.data.forEach((spot) => {
        const info = {
          id: spot.ID,
          name: spot.Name,
          description: spot.Description,
          openTime: spot.OpenTime,
          ticketInfo: spot.TicketInfo,
          travelInfo: spot.TravelInfo,
          address: spot.Address,
          phone: spot.Phone
        }
        spotList.push(info);
      });
      this.setState({ spotList: spotList });
    } catch (error) {
      console.log(error);
    } finally {
      await this.setState({ loading: false });
    }
  }
  checkScroll(e) {
    if (this.state.loading === true) {
      return;
    }
    const scrollHeight = e.target.scrollingElement.scrollHeight;
    const scrollTop = e.target.scrollingElement.scrollTop;
    const clientHeight = e.target.scrollingElement.clientHeight;
    if (scrollHeight <= clientHeight + scrollTop + 10) {
      this.getSpots();
    }
  }
  render() {
    const { spotList } = this.state;
    return (
      <Wrapper>
        {
          spotList.length > 0 && 
          spotList.map((spot) => (
            <Spot
              key={spot.id}
              name={spot.name}
              description={spot.description}
              openTime={spot.openTime}
              ticketInfo={spot.ticketInfo}
              travelInfo={spot.travelInfo}
              address={spot.address}
              phone={spot.phone}
            />
          ))
        }
      </Wrapper>
    );
  }
}