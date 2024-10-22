import'./Task.css'
import { useState } from 'react'

function Task(){

      


    return(


        <div className='bodycontent'>
        <div className='bgimgcont'>
        <div className='bgimgplace'>


<nav className="navbar">
        <img src="./logo.jpeg" className="head-logo"/>
      <div className="logocont">InnerPeaceAI</div>
    </nav>

<div className="form-container">
        <form >
            <label htmlFor="question" className='task-quest'>what sleep issues are you currently experiencing?</label>
            <div className="options">
                <div className='task-inputs'>
                <input type="radio" id="berlin" name="capital" value="Berlin" />
                <label htmlFor="berlin">Can fall asleep</label>
                </div><br/>

                <div className='task-inputs'>
                <input type="radio" id="madrid" name="capital" value="Madrid" />
                <label htmlFor="madrid">Can't stay sleep</label>
                </div><br/>

                <div className='task-inputs'>
                <input type="radio" id="paris" name="capital" value="Paris" />
                <label htmlFor="paris">Wake up multiple times</label>
                </div><br/>

                <div className='task-inputs'>
                <input type="radio" id="rome" name="capital" value="Rome" />
                <label htmlFor="rome">Stressful dreams</label>
                </div><br/>
            </div>
            <button type="submit">Submit</button>
        </form>
    </div>





    {/* one */}

    <div className="form-container">
        <form>
            <label htmlFor="question" className='task-quest'>Gender</label>
            <div className="options">
                <div className='task-inputs'>
                <input type="radio" id="berlin" name="capital" value="Berlin"/>
                <label htmlFor="berlin">Male</label>
                </div><br/>

                <div className='task-inputs'>
                <input type="radio" id="madrid" name="capital" value="Madrid"/>
                <label htmlFor="madrid">Female</label>
                </div><br/>

                <div className='task-inputs'>
                <input type="radio" id="paris" name="capital" value="Paris"/>
                <label htmlFor="paris">Prefer not to say</label>
                </div><br/>

                <div className='task-inputs'>
                <input type="radio" id="rome" name="capital" value="Rome"/>
                <label htmlFor="rome">Other</label>
                </div><br/>
            </div>
            <button type="submit">Submit</button>
        </form>
    </div>







        {/* two */}

        <div className="form-container">
        <form>
            <label htmlFor="question" className='task-quest'>what is your age?</label>
            <div className="options">
                <div className='task-inputs'>
                <input type="radio" id="berlin" name="capital" value="Berlin"/>
                <label htmlFor="berlin">10-20</label>
                </div><br/>

                <div className='task-inputs'>
                <input type="radio" id="madrid" name="capital" value="Madrid"/>
                <label htmlFor="madrid">21-30</label>
                </div><br/>

                <div className='task-inputs'>
                <input type="radio" id="paris" name="capital" value="Paris"/>
                <label htmlFor="paris">31-40</label>
                </div><br/>

                <div className='task-inputs'>
                <input type="radio" id="rome" name="capital" value="Rome"/>
                <label htmlFor="rome">41 above</label>
                </div><br/>
            </div>
            <button type="submit">Submit</button>
        </form>
    </div>





{/* two */}

<div className="form-container">
        <form>
            <label htmlFor="question" className='task-quest'>which place did you feel more stress</label>
            <div className="options">
                <div className='task-inputs'>
                <input type="radio" id="berlin" name="capital" value="Berlin"/>
                <label htmlFor="berlin">Classroom</label>
                </div><br/>

                <div className='task-inputs'>
                <input type="radio" id="madrid" name="capital" value="Madrid"/>
                <label htmlFor="madrid">Office</label>
                </div><br/>

                <div className='task-inputs'>
                <input type="radio" id="paris" name="capital" value="Paris"/>
                <label htmlFor="paris">Home</label>
                </div><br/>

                <div className='task-inputs'>
                <input type="radio" id="rome" name="capital" value="Rome"/>
                <label htmlFor="rome">Society</label>
                </div><br/>
            </div>
            <button type="submit">Submit</button>
        </form>
    </div>





{/* two */}

<div className="form-container">
        <form>
            <label htmlFor="question" className='task-quest'>How many times  You feel Irritated </label>
            <div className="options">
                <div className='task-inputs'>
                <input type="radio" id="berlin" name="capital" value="Berlin"/>
                <label htmlFor="berlin">Sometimesm</label>
                </div><br/>

                <div className='task-inputs'>
                <input type="radio" id="madrid" name="capital" value="Madrid"/>
                <label htmlFor="madrid">All time</label>
                </div><br/>

                <div className='task-inputs'>
                <input type="radio" id="paris" name="capital" value="Paris"/>
                <label htmlFor="paris">Rare</label>
                </div><br/>

            </div>
            <button type="submit">Submit</button>
        </form>
    </div>






</div>
        </div>

</div>
    )
}

export default Task