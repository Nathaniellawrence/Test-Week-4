import React from "react";
import { useAuth } from "../context/AuthContext";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  const { user, logout } = useAuth;

  return (
    // <div>
    //   <h2>Dashboard</h2>
    //   <h3>Welcome, {user ? user.token : "Guest"}</h3>
    //   <button onClick={logout}>Logout</button>
    // </div>
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/produk">Produk</Nav.Link>
            <Nav.Link href="/keranjang">Keranjanng</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Container className="mt-3">
        <Outlet />
      </Container>
    </>
  );
};

export default Dashboard;
