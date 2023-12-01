
import styled from 'styled-components';
import { theme } from '../../../../../../theme';

const ImageContainer = ({imageSource, title}) => {
    return (
        <ImageContainerStyled className="imageContainer">
        {imageSource ? (
          <img src={imageSource} alt={title} />
        ) : (
          <p>Aucune image</p>
        )}
      </ImageContainerStyled>
    );
};

const ImageContainerStyled = styled.div`
border: 1px solid ${theme.colors.greyLight};
    border-radius: 5px;
    height: 118px;
    width: 215px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${theme.colors.greySemiDark};
    img {
      object-fit: contain;
      width: 100%;
      height: 100%;
    }
`

export default ImageContainer;