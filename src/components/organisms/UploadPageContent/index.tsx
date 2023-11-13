import ModalDialog from '../../atoms/ModalDialog';
import { BoxUpload, UploadImage, TitleUpload, DefaultImage } from './styled';

type ModalUploadProps = {
  isOpen: boolean;
};

export const ModalUpload = ({ isOpen }: ModalUploadProps) => (
  <ModalDialog open={isOpen}>
    <BoxUpload>
      <TitleUpload>Upload a Dog image</TitleUpload>
      <UploadImage>
        <div>
          <DefaultImage>
            <div>Drag and Drop here </div>
            <div>or</div>
            <div>Browse files</div>
          </DefaultImage>
        </div>
      </UploadImage>
      <div>Accepted File Types: jpg and png</div>
    </BoxUpload>
  </ModalDialog>
);
