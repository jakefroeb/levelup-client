import React, { useContext, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { GameContext } from "./GameProvider.js"

export const GameList = (props) => {
    const { games, getGames } = useContext(GameContext)
    const history = useHistory()

    useEffect(() => {
        getGames()
    }, [])

    return (
        <article className="games">
            <button className="btn btn-2 btn-sep icon-create" onClick={() => {
                history.push({ pathname: "/games/new" })}}
            >Register New Game</button>
            {
                games.map(game => {
                    console.log(game)
                    return <section key={`game--${game.id}`} className="game">
                        <div className="game__title"><h2>{game.name}</h2></div>
                        <div className="game__type">type : {game.game_type.name}</div>
                    </section>
                })
            }
        </article>
    )
}