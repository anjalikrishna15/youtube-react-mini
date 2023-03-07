import { Call, Email, Room } from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;
const Desc = styled.p`
  margin: 20px 0px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0px;
  padding: 0px;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Campus Supply.</Logo>
        <Desc>
          Campus Supply is College of Engineering Chengannur's cooperative
          society store! We are dedicated to providing quality products and
          services to our college community, including students, faculty
          members, and staff.
        </Desc>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Wishlist</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} />
          College of Engineering Chengannur,Chengannur P.O,Alappuzha
        </ContactItem>
        <ContactItem>
          <Call style={{ marginRight: "10px" }} />
          +91-4792-454125
        </ContactItem>
        <ContactItem>
          <Email style={{ marginRight: "10px" }} /> conatct@ceconline.edu
        </ContactItem>
      </Right>
    </Container>
  );
};

export default Footer;
