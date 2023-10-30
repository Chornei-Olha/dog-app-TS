import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

interface ModalDialogProps {
  open: boolean;
  onClose: () => void;
}
const StyledDialog = styled(Dialog)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'white',
  boxShadow: '6px 6px 0px 0px #000000',
  borderRadius: '20px'
});

const StyledDialogTitle = styled(DialogTitle)({
  fontSize: '40px',
  backgroundColor: 'white'
});

// eslint-disable-next-line react/prop-types
const ModalDialog: React.FC<ModalDialogProps> = ({ open, onClose }) => (
  <StyledDialog open={open} onClose={onClose}>
    <StyledDialogTitle>Upload a Dog image</StyledDialogTitle>
    <DialogContent>
      <DialogContentText>Information for this dialog</DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={onClose} color="primary">
        Close
      </Button>
    </DialogActions>
  </StyledDialog>
);

export default ModalDialog;
