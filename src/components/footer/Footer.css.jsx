import styled from 'styled-components'
import discordLogo from '../../styles/images/icons/ds.png';
import ipLogo from '../../styles/images/icons/ip.png';
import ttLogo from '../../styles/images/icons/tt.png';
import ROSLogo from '../../styles/images/icons/RULES-OF-SKY.png';


export const StyledFooter = styled.div`

    width: 100%;
    margin-bottom: 1rem;
    padding: 1rem 0;
    min-height: 3vh;
    background-color: #0001;
    display: flex;
    justify-content: space-around; 
    flex-direction: row;
    position: fixed;
    bottom: 0;
    right: 0;
    z-index: 100;

`;

export const Logo = styled.img`

    background-image: url(${
        ({ip, ds, tt, ros}) =>  
            ds && discordLogo ||
            ip && ipLogo ||
            tt && ttLogo ||
            ros && ROSLogo
    });
    background-size: cover;
    width: ${
        ({ros}) => (
            ros
                ? `40rem;`
                : `4rem;`
        )
    }
    height: 4rem;

`;