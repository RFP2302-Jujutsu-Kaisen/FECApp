import React from 'react';
import styled from 'styled-components';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Modal = styled.div`
  background-color: white;
  border-radius: 10px;
  width: 600px;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const ModalCloseButton = styled.button`
  align-self: flex-end;
  font-size: 20px;
  color: black;
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin-bottom: 10px;
`;

export default function ModalTest({ isOpen, onClose, children }) {
  if (!isOpen) {
    return null;
  }

  return (
    <ModalOverlay>
      <Modal>
        <ModalCloseButton type="button" onClick={onClose}>
          &times;
        </ModalCloseButton>
        {children}
      </Modal>
    </ModalOverlay>
  );
}
