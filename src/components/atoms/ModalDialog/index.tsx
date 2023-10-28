// import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';

interface ModalDialogProps {
  open: boolean;
  onClose: () => void;
}

const ModalDialog: React.FC<ModalDialogProps> = ({ open, onClose }) => {
  <Dialog open={open} onClose={onClose}>
    <DialogTitle>Modal Dialog</DialogTitle>
    <DialogContent>
      <DialogContentText>This is a Material-UI modal dialog.</DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={onClose} color="primary">
        Close
      </Button>
    </DialogActions>
  </Dialog>;
};

export default ModalDialog;
