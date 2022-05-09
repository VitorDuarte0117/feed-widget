import React, { useState } from "react";
import { View, TextInput, Image, Text, TouchableOpacity } from "react-native";

import { ArrowLeft } from "phosphor-react-native";
import { styles } from "./styles";
import { theme } from "../../theme";
import { captureScreen } from "react-native-view-shot";

import { FeedbackType } from "../../components/Widget";
import { Button } from "../../components/Button";
import { ScreenshotButton } from "../../components/ScreenshotButton";
import { feedbackTypes } from "../../utils/feedbackTypes";
interface Props {
    feedbackType: FeedbackType;
}

export function Form({ feedbackType }: Props) {
    const [screenshot, setScreenshot] = useState<string | null>(null);
    const feedbackTypeInfo = feedbackTypes[feedbackType];

    function handleScreenshot() {
        captureScreen({
            format: "jpg",
            quality: 0.8,
        })
            .then((uri) => setScreenshot(uri))
            .catch((err) => console.log(err));
    }
    function handleScreenshotRemove() {
        setScreenshot(null);
    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity>
                    <ArrowLeft
                        size={24}
                        weight="bold"
                        color={theme.colors.text_secondary}
                    />
                </TouchableOpacity>
                <View style={styles.titleContainer}>
                    <Image
                        source={feedbackTypeInfo.image}
                        style={styles.image}
                    />
                    <Text style={styles.titleText}>
                        {feedbackTypeInfo.title}
                    </Text>
                </View>
            </View>

            <TextInput
                multiline
                style={styles.input}
                placeholder="Something doesn't work? Tell us"
                placeholderTextColor={theme.colors.text_secondary}
            />
            <View style={styles.footer}>
                <ScreenshotButton
                    onTakeShot={handleScreenshot}
                    onRemoveShot={handleScreenshotRemove}
                    screenshot={screenshot}
                />
                <Button isLoading={false} />
            </View>
        </View>
    );
}
