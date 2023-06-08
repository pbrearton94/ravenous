import Modal from "react-bootstrap/Modal";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Review = ({ id }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("Transitioning...");
  const [reviews, setReviews] = useState([]);
  const apiKey =
    "Xfkr6T3OS1Z0Nl_UrHntgyqPh-I1uXcaiWbE3DmmD0UAPUi_4vgtPsWxoq8Cn0edKMMKkiJz3WqV6FgvujrrCE5QvcXERILdsh6O8_fwz2JGtri5-_zXNQp0ljp_ZHYx";

  const showModal = () => {
    setIsOpen(true);
  };

  const hideModal = () => {
    setIsOpen(false);

    setTitle("Transitioning...");
  };

  const modalLoaded = () => {
    setTitle("Modal Ready");
  };

  useEffect(() => {
    try {
      async function fetchReviews() {
        console.log("inside fetcHReviews for id: " + id);
        axios.get(
          `https://api.yelp.com/v3/businesses/${id}/reviews`,
          {
            headers: {
              Authorization: `Bearer ${apiKey}`,
              Accept: "application/json",
              "X-Requested-With": "XmlHttpRequest",
              "Access-Control-Allow-Origin": "*",
            }
          }
        ).then((response) => {
          console.log("object value: " + JSON.stringify(response.data));
          setReviews(response.data);
          console.log('value of reviews: ' + reviews);
        });
        // if (response){
        //   console.log(JSON.stringify(response));
        // }
        // response.json().then((res) => {
        //   console.log("response: " + res.review);
        //   setReviews(res.review);
        // });
      }
      if (isOpen) {
        console.log("calling api");
        fetchReviews();
      }
    } catch (e) {
      console.log("exception: " + e);
    }
  }, [reviews, id, isOpen]);

  return (
    <>
      <button className="btn btn-primary" onClick={showModal}>
        Show Reviews
      </button>
      <Modal show={isOpen} onHide={hideModal} onEntered={modalLoaded}>
        <Modal.Header>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{id}</Modal.Body>
        <Modal.Footer>
          <button className="btn btn-primary" onClick={hideModal}>
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Review;
