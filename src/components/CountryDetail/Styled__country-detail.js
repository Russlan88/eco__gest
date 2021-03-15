import styled from 'styled-components';
import { borderColor, whiteColor } from '../../utilities';

export const GridItem = styled.div`
    display: flex;
    border-bottom: 1px solid ${borderColor};
    background: ${whiteColor};
    align-items: center;

    &:hover{
        opacity: .96;
    }
`;

export const Img = styled.img`
    width: 120px;
    object-fit: fill;
    margin-right: 50px;
`;
