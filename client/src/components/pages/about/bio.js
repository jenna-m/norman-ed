import React from 'react';
import bioImg from '../../../constants/bio/bio.jpg';


class Bio extends React.Component {
    render() {
        // Bio text URL
        const bioURL = "http://www.johnstownart.com/past-scholarshipshow.html#anchor_39"

        // Bio photo credit URL
        const creditURL = "https://artworksjohnstown.wordpress.com/2012/06/03/check-out-some-photos-from-the-opening-night-of-dialogue/";
        
        return (
            <div className="container">
                <h1>Biography</h1>
                <div className="bio-container">
                    <div className="bio-text">
                        <p>
                            I attended Westmont Hilltop High School,  graduating in 1977. In high school, I studied art with Mr. Glenn Brougher. I went on to attend Tyler School of Art, Temple University, graduating in 1981 with a B.F.A. in Interdepartmental Studies with a concentration in glass, and received my PA teaching certification. After graduating from Tyler School of Art, I remained in Philadelphia gaining varied work experience in carpentry, art restoration and the music industry in management.
                        </p>
                        <p>
                            Eventually I returned to the Johnstown area and continued my studies as a post graduate at Indiana University of Pennsylvania under the mentorship of Dr. James Nestor and worked in the construction and engineering fields. I then received a position with the Westmont Hilltop School District as an art instructor, which is my current profession. Throughout my life’s journey, I have continued my practice in art which is focused mainly on  mixed media sculpture. I exhibit my work on a regular basis regionally, and on occasion there have been opportunities to exhibit along the east coast.
                        </p>
                    </div>
                    <div className="bio-image">
                        <img src={ bioImg } alt="Norman Ed" />
                        <p>Photo credit: <a href={ creditURL } target="new">Art Works in Johnstown</a></p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Bio;