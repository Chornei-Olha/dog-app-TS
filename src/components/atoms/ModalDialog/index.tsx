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
  confirm: () => void;
  title: string;
  description: string;
  textBtnClose: string;
  textBtnConfirm: string;
}

const StyledDialog = styled(Dialog)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
});

const StyledDialogTitle = styled(DialogTitle)({
  fontSize: '40px'
});

const ModalDialog = ({
  open,
  onClose,
  confirm,
  title = 'Upload a Dog image',
  description = 'Information for this dialog',
  textBtnClose = 'close',
  textBtnConfirm = 'confirm'
}: ModalDialogProps) => (
  <StyledDialog
    open={open}
    onClose={onClose}
    PaperProps={{
      style: {
        borderRadius: 20,
        background: 'white',
        boxShadow: '6px 6px 0px 0px #000000'
      }
    }}
  >
    <StyledDialogTitle>{title}</StyledDialogTitle>
    <DialogContent>
      <DialogContentText>{description}</DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={onClose} color="primary" variant="outlined">
        {textBtnClose}
      </Button>
      <Button onClick={confirm} color="primary" variant="contained">
        {textBtnConfirm}
      </Button>
    </DialogActions>
  </StyledDialog>
);

export default ModalDialog;
