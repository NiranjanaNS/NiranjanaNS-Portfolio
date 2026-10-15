import { Badge, Card } from "@niranjanans/ui";
import { CodeText } from "@/components/typography/typography";
import { useSceneManager } from "@/providers/scene-provider";

interface ScrollDebugPanelProps {
  device: string;
  isHorizontal: boolean;
}

export function ScrollDebugPanel({ device, isHorizontal }: ScrollDebugPanelProps) {
  const { currentScene, nextScene, progress, sceneProgress } = useSceneManager();
  return (
    <Card className="space-y-4">
      <Badge>Scroll engine state</Badge>
      <div className="grid gap-3 text-sm text-muted">
        <p>
          Device: <CodeText>{device}</CodeText>
        </p>
        <p>
          Mode: <CodeText>{isHorizontal ? "horizontal pinned" : "stacked fallback"}</CodeText>
        </p>
        <p>
          Current scene: <CodeText>{currentScene.label}</CodeText>
        </p>
        <p>
          Next scene: <CodeText>{nextScene?.label ?? "Complete"}</CodeText>
        </p>
        <p>
          World progress: <CodeText>{Math.round(progress * 100)}%</CodeText>
        </p>
        <p>
          Scene progress: <CodeText>{Math.round(sceneProgress * 100)}%</CodeText>
        </p>
      </div>
    </Card>
  );
}
