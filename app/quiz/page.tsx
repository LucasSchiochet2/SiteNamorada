"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { getQuizList } from "@/src/api";

// Tipos
interface AnswerOption {
  answerText: string;
  isCorrect: boolean;
}

interface Question {
  title: string;
  questionText: string;
  answerOptions: AnswerOption[];
}
function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export default function Quiz() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [showScore, setShowScore] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);

  // Buscar questões da API
  useEffect(() => {
    getQuizList().then((data) => {
      // Embaralha as alternativas de cada questão
      const shuffledQuestions = data.data.map((q: Question) => ({
        ...q,
        answerOptions: shuffleArray(q.answerOptions),
      }));
      setQuestions(shuffledQuestions);
    });
  }, []);

  const handleAnswerOptionClick = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const handleReset = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };

  if (questions.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-[70vh]">
        Carregando questões...
      </div>
    );
  }

  return (
    <div
      className="flex flex-col items-center justify-center min-h-[70vh] p-4 mt-18 lg:mt-46 xl:mt-48"
      style={{ background: "var(--color-light)", color: "var(--color-mono)" }}
    >
      <div className="flex items-center gap-2 text-sm text-gray-500">
        <Link href="/" className="hover:text-primary">
          Home
        </Link>
        <span>/</span>
        <Link href="/quiz" className="text-primary">
          Quiz
        </Link>
      </div>
      <h2 className="text-3xl text-secondary font-bold mb-6 text-center">
        Quiz
      </h2>
      <div
        className="p-8 rounded-2xl shadow-xl w-full max-w-lg border border-accent"
        style={{
          background: "var(--color-mono-white)",
          borderColor: "var(--color-mono-dark)",
        }}
      >
        {showScore ? (
          <div className="text-center animate-fade-in">
            <h2
              className="text-3xl font-bold mb-4"
              style={{ color: "var(--color-primary)" }}
            >
              Quiz Finalizado!
            </h2>
            <p className="text-xl mb-6">
              Você acertou <span className="font-bold">{score}</span> de{" "}
              <span className="font-bold">{questions.length}</span> questões.
            </p>
            <div
              className="w-full rounded-full h-4 mb-8"
              style={{ background: "var(--color-mono-dark)" }}
            >
              <div
                className="h-4 rounded-full transition-all duration-1000"
                style={{
                  width: `${(score / questions.length) * 100}%`,
                  background: "var(--color-primary)",
                }}
              ></div>
            </div>
            <button
              onClick={handleReset}
              className="px-6 py-3 rounded-lg font-semibold transition-colors duration-200 w-full"
              style={{
                background: "var(--color-primary)",
                color: "var(--color-light)",
              }}
            >
              Jogar Novamente
            </button>
          </div>
        ) : (
          <>
            <div className="flex justify-between items-center mb-8">
              <div
                className="text-sm font-medium"
                style={{ color: "var(--color-mono-dark)" }}
              >
                Questão {currentQuestion + 1}/{questions.length}
              </div>
              <span
                className="px-2 py-1 text-xs font-semibold rounded"
                style={{
                  background: "var(--color-secondary)",
                  color: "var(--color-light)",
                }}
              >
                Geral
              </span>
            </div>
            <h2 className="text-3xl font-bold mb-8 h-5 text-primary flex items-center">
              {questions[currentQuestion].title}
            </h2>
            <h2 className="text-2xl font-bold mb-8 h-20 flex items-center">
              {questions[currentQuestion].questionText}
            </h2>
            <div className="flex flex-col gap-4">
              {questions[currentQuestion].answerOptions.map(
                (answerOption, index) => (
                  <button
                    key={index}
                    onClick={() =>
                      handleAnswerOptionClick(answerOption.isCorrect)
                    }
                    className="w-full text-left px-4 py-3 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2"
                    style={{
                      background: "var(--color-accent)",
                      color: "var(--color-light)",
                      border: `1px solid var(--color-primary)`,
                      transition: "background 0.2s",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.background =
                        "var(--color-secondary)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.background = "var(--color-accent)")
                    }
                  >
                    {answerOption.answerText}
                  </button>
                )
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
