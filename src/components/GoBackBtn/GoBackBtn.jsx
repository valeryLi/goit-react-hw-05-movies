import { useNavigate, useLocation } from 'react-router-dom';
import { ButtonGoBack } from './GoBackBtn.styled';
import { RiArrowGoBackLine } from 'react-icons/ri';

export const GoBackBtn = () => {
  const navigate = useNavigate();
  const location = useLocation;

  return (
    <ButtonGoBack
      type="button"
      onClick={() => {
        navigate(location.state?.from ?? '/');
      }}
    >
      <RiArrowGoBackLine style={{ width: '30px', height: '30px' }} />
      Go back
    </ButtonGoBack>
  );
};
