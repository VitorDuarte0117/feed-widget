import { useState } from "react";

import CloseButton from "../CloseButton";

import bugImageUrl from "../../assets/bug.svg";
import ideaImageUrl from "../../assets/idea.svg";
import thoughtImageUrl from "../../assets/thought.svg";
import FeedbackTypeStep from "./Steps/FeedbackTypeStep";
import FeedbackContentStep from "./Steps/FeedbackContentStep";
import FeedbackSuccessStep from "./Steps/FeedbackSuccessStep";

export const feedbackTypes = {
    BUG: {
        title: "Problem",
        image: {
            source: bugImageUrl,
            alt: "Bug image",
        },
    },
    IDEA: {
        title: "Idea",
        image: {
            source: ideaImageUrl,
            alt: "Light bulb image",
        },
    },
    OTHER: {
        title: "Other",
        image: {
            source: thoughtImageUrl,
            alt: "Cloud image",
        },
    },
};

export type FeedbackType = keyof typeof feedbackTypes;

const WidgetForm = () => {
    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);

    const [feedbackSent, setFeedbackSent] = useState(false);

    function handleRestartFeedback() {
        setFeedbackSent(false);
        setFeedbackType(null);
    }
    return (
        <div className="bg-zinc-800 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg text-white w-[calc(100vw-2rem)] md:w-auto">
            {feedbackSent ? (
                <FeedbackSuccessStep
                    onFeedbackRestartRequested={handleRestartFeedback}
                />
            ) : (
                <>
                    {!feedbackType ? (
                        <FeedbackTypeStep
                            onFeedbackTypeChanged={setFeedbackType}
                        />
                    ) : (
                        <FeedbackContentStep
                            feedbackType={feedbackType}
                            onFeedbackRestartRequested={handleRestartFeedback}
                            onFeedbackSent={() => setFeedbackSent(true)}
                        />
                    )}
                </>
            )}
            <footer>
                Made by{" "}
                <a
                    className="underline underline-offset-2"
                    href="https://www.rocketseat.com.br/"
                >
                    RocketSeat
                </a>
            </footer>
        </div>
    );
};

export default WidgetForm;
