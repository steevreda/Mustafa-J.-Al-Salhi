import React from 'react'
import Image from 'material-ui-image'
import Header from '../Header/Header'
import SoonImage from '../Images/464426-PFQ0MX-510.jpg'
import Box from '@material-ui/core/Box';

class CommingSoon extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Box style = {{ height: '30%',width: '100%',}}>
                    <Image  src={SoonImage} />
                </Box>

            </div>

        )
    }
}
export default CommingSoon;