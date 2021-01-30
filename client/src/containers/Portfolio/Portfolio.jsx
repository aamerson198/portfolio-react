import React, { Component } from "react";
import Header from "../../components/Header/Header";
import VideoBG from "../../components/VideoBG/VideoBG";
import SideNav from "../../components/SideNav/SideNav";
import "./style.css";
import Items from "../../components/portfolioItems.json";
import Wrapper from "../../components/Wrapper/Wrapper";
import PortfolioItemCard from "../../components/PortfolioItemCard/PortfolioItemCard";

class Portfolio extends Component {
  // Setting this.state.Items to the Items json array
  state = {
    Items,
  };

  render() {
    return (
      <>
        <Header></Header>
        <VideoBG></VideoBG>
        <SideNav></SideNav>
        <Wrapper>
          {this.state.Items.map((Item) => (
            <PortfolioItemCard
              id={Item.id}
              key={Item.id}
              name={Item.name}
              image={Item.image}
              description={Item.description}
              ref={Item.ref}
            />
          ))}
        </Wrapper>
      </>
    );
  }
}
export default Portfolio;
