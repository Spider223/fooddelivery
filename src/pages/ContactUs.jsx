import React from "react";
import { Container, Row, Col, Table, Image } from "react-bootstrap";
import { BsFillTelephoneFill } from "react-icons/bs";
import { ImMobile } from "react-icons/im";
import { FiMail } from "react-icons/fi";
import Pizza from "../assets/pizza.jpg";

export default function () {
  return (
    <>
      <Container style={{ marginTop: "50px" }}>
        <Row>
          <h1>Contact Us</h1>
          <Col md={6}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
              harum dolores repellat commodi sequi numquam quos suscipit
              deserunt recusandae nisi ullam atque voluptatem necessitatibus
              exercitationem perspiciatis nam nemo, odit dolorum. Id hic
              accusamus, officia quia corporis beatae exercitationem facere nisi
              itaque alias? Aliquid, at inventore et saepe dolore excepturi
              ipsum magnam necessitatibus cumque consectetur fugit esse quod.
              Molestias unde corrupti cumque saepe obcaecati, delectus, officia
              quo, suscipit consectetur magni placeat necessitatibus quaerat!
              Quas, illum aliquid eveniet cumque modi sequi saepe praesentium
              magnam et tenetur fugit unde quae aliquam a dolore, vero natus
              incidunt, officiis pariatur earum dolorum? Beatae corrupti
              voluptate suscipit voluptatibus eius, recusandae ut quae dolorum?
              Omnis quia animi quis, error corrupti iusto facere eligendi a
              repellendus illum fugit minima similique eveniet sit voluptatem
              nobis deserunt sed mollitia, tempore iure quod? Alias debitis
              culpa sed ratione modi numquam nobis? Neque, enim dolore eaque
              maiores quasi iusto nesciunt quam molestiae! Voluptatibus, alias.
              Amet iure, numquam consectetur inventore aliquam sapiente minus
              animi rem exercitationem! Ratione reprehenderit debitis aliquam.
              Cupiditate maxime doloribus rem atque inventore, sit distinctio
              aspernatur consequatur eligendi et ab consectetur. Illum
              repellendus dicta quis optio quos illo debitis quod aspernatur
              similique, officiis impedit quam veniam nesciunt cum id amet!
            </p>
            <Table striped bordered hover className="text-center">
              <thead>
                <tr>
                  <th className="text-center" colSpan={3}>
                    Contact Details
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <BsFillTelephoneFill />
                  </td>
                  <td>Phone</td>
                  <td>023-58392</td>
                </tr>

                <tr>
                  <td>
                    <ImMobile />
                  </td>
                  <td>Mobile</td>
                  <td>9823248018</td>
                </tr>
                <tr>
                  <td>
                    <FiMail />
                  </td>
                  <td>Mail</td>
                  <td>fooddeliveryman@gmail.com</td>
                </tr>
              </tbody>
            </Table>
          </Col>
          <Col md={6}>
            <Image src={Pizza} alt="pizza" style={{ width: "100%" }} />
          </Col>
        </Row>
      </Container>
    </>
  );
}
