import React, { useContext, useState, useEffect } from "react"
import { GameContext } from "./GameProvider.js"
import { useHistory } from 'react-router-dom'
import { EventContext } from "./EventProvider.js"


export const EventForm = () => {
    const history = useHistory()
    const { getGames, games } = useContext(GameContext)
    const {createEvent} = useContext(EventContext)

    const [currentEvent, setCurrentEvent] = useState({
        date: "",
        gameId: 0
    })
    useEffect(() => {
        getGames()
    }, [])

    const handleInputChange = (e) => {
        const tempEvent = {...currentEvent}
        tempEvent[e.target.name] = e.target.value
        setCurrentEvent(tempEvent)
    }

    return (
        <form className="gameForm">
            <h2 className="gameForm__title">Register New Game</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Date</label>
                    <input type="date" name="date" required autoFocus className="form-control"
                        value={currentEvent.date}
                        onChange={handleInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="gameId">Game: </label>
                    <select name="gameId" className="form-control"
                        value={currentEvent.gameId}
                        onChange={handleInputChange}>
                        <option value="0">Select a Game Type</option>
                        {games.map(game => (
                            <option key={game.id} value={game.id}>
                                {game.name}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>


            {/* You create the rest of the input fields for each game property */}

            <button type="submit"
                onClick={evt => {
                    // Prevent form from being submitted
                    evt.preventDefault()

                    const event = {
                        date: currentEvent.date,
                        gameId: parseInt(currentEvent.gameId)
                    }
                    // Send POST request to your API
                    createEvent(event)
                        .then(() => history.push("/events"))
                }}
                className="btn btn-primary">Create</button>
        </form>
    )
}