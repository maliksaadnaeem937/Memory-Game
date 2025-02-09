import React, { useEffect, useState } from "react";
import MemoryCard from "./Components/MemoryCard";
import RegularButton from "./Components/RegularButton";
import useFetch from "./Components/Hooks/useFetch";
import LoadingSpinner from "./Components/LoadingSpinner";
import GameOver from "./Components/GameOver";
import Turn from "./Components/Turn";
import ScoreCard from "./Components/ScoreCard";
import Header from "./Components/Header";
import Celebrations from "./Components/Celebrations";
export default function App() {
  const { data, loading, error, fetchData } = useFetch();
  const [selectedCards, setSelectedCards] = useState([]);
  const [matchingCards, setMatchingCards] = useState([]);
  const [isGameOver, setIsGameOver] = useState(false);
  const [turn, setTurn] = useState(1);
  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setPlayer2Score] = useState(0);
  const [celebrations, setCelebrations] = useState(false);
  const playBeep = () => {
    const context = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = context.createOscillator();
    oscillator.type = "sine";
    oscillator.frequency.setValueAtTime(1000, context.currentTime);
    oscillator.connect(context.destination);
    oscillator.start();
    oscillator.stop(context.currentTime + 0.2);
  };
  useEffect(() => {
    if (!data) return;
    if (matchingCards.length === data?.length) {
      playBeep();

      setIsGameOver(true);
    }
    if (matchingCards.length != data?.length) {
      setCelebrations(true);
      setTimeout(() => setCelebrations(false), 2000);
    }

    playBeep();
  }, [matchingCards]);

  useEffect(() => {
    if (
      selectedCards.length === 2 &&
      selectedCards[0].name === selectedCards[1].name
    ) {
      setMatchingCards((prevMatcingCards) => [
        ...prevMatcingCards,
        ...selectedCards,
      ]);

      if (turn === 1 && matchingCards.length > 0) {
        setPlayer1Score((currScore) => currScore + 1);
      } else if (turn === 2 && matchingCards.length > 0) {
        setPlayer2Score((currScore) => currScore + 1);
      }
    }
    if (selectedCards.length === 2) {
      setTurn((prevTurn) => (prevTurn === 1 ? 2 : 1));
    }
  }, [selectedCards]);
  const turnCard = (index, name) => {
    console.log("turn card");
    let found = false;
    selectedCards.forEach((object) => {
      if (object.name === name && object.index === index) {
        found = true;
      }
    });
    if (!found && selectedCards.length === 2) {
      const newArray = [{ index, name }];

      setSelectedCards(newArray);
    } else if (!found && selectedCards.length < 2) {
      const newArray = [...selectedCards, { index, name }];

      setSelectedCards(newArray);
    }
  };
  const startGame = async () => {
    setIsGameOver(false);
    setPlayer1Score(0);
    setPlayer2Score(0);
    setSelectedCards([]);
    setMatchingCards([]);
    playBeep();
    fetchData();
  };

  return (
    <>
      <Header></Header>
      <main className="flex justify-center flex-col gap-10 items-center min-h-screen bg-blue-950">
        {celebrations && <Celebrations></Celebrations>}
        {data && !isGameOver && !loading && (
          <ScoreCard
            player1Score={player1Score}
            player2Score={player2Score}
          ></ScoreCard>
        )}

        {data && !isGameOver && !loading && <Turn turn={turn}></Turn>}
        {isGameOver && (
          <GameOver
            startGame={startGame}
            player1Score={player1Score}
            player2Score={player2Score}
          ></GameOver>
        )}
        {loading && <LoadingSpinner></LoadingSpinner>}
        {data && !isGameOver && !loading && (
          <MemoryCard
            turnCard={turnCard}
            emojiArray={data}
            selectedCards={selectedCards}
            matchingCards={matchingCards}
          />
        )}
        {!data && !loading && (
          <RegularButton startGame={startGame}>Start Game</RegularButton>
        )}
        {!loading && error && !data && <div>{error}</div>}
      </main>
    </>
  );
}
