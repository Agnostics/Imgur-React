import React, {Component} from 'react';

let currentSection = 'Most Viral';
let currentSort = 'popularity';

export default class Sorting extends Component {

    render() {
        return (
            <div className='sort'>
                <p>The &nbsp;
                    <span className='sort-select'>{currentSection}

                    </span>
                    &nbsp;images on the internet, sorted by&nbsp;
                    <span className='sort-select'>{currentSort}</span>
                </p>

                <div className='section'>
                    <ul>
                        <li className='current'>current</li>
                        <li className='active'>Most Viral</li>
                        <hr/>
                        <li>Most Viral</li>
                        <li>User Submitted</li>
                        <li>Staff Picks</li>
                        <li>Funny</li>
                        <li>Awesome</li>
                        <li>Aww</li>
                        <li>The More You Know</li>
                        <li>Storyline</li>
                        <li>Current Events</li>
                        <li>Design & Art</li>
                        <li>Reaction</li>
                        <li>Inspiring</li>
                    </ul>
                </div>
				
                <div className='sort'>
                    <ul>
                        <li className='current'>current</li>
                        <li className='active'>popularity</li>
                        <hr/>
                        <li>popularity</li>
                        <li>newest first</li>
                        <li>highest scoring</li>

                    </ul>

                </div>
            </div>

        );
    }
}
