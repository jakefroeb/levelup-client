import React, { useContext, useEffect } from "react"
import { GameContext } from "./GameProvider.js"

export const GameList = (props) => {
    const { games, getGames } = useContext(GameContext)

    useEffect(() => {
        getGames()
    }, [])

    return (
        <article className="games">
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