import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import { cn } from "@/lib/utils";

interface ProgressProps {
  className?: string;
  value?: number;
}


const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  ProgressProps
>(({ className, value, ...props }, ref) => {
  // Calculate a darker shade based on the progress value
  const calculateColor = (value: number | undefined) => {
    // Ensure value is between 0 and 100
    const normalizedValue = Math.max(0, Math.min(100, value || 0));
  
    // Define the start and end hues for blue and purple
    const startHue = 240; // Blue
    const endHue = 270;   // Purple
  
    // Interpolate the hue based on the normalized value
    const hue = startHue + ((endHue - startHue) * (normalizedValue / 100));
  
    // You can adjust the saturation and lightness as needed
    const saturation = 50;  // Example saturation
    const lightness = 50;   // Example lightness
  
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  };
  


    return (
      <ProgressPrimitive.Root
        ref={ref}
        className={cn(
          "relative h-4 w-full overflow-hidden rounded-full bg-secondary",
          className
        )}
        {...props}
      >
        <ProgressPrimitive.Indicator
          className="h-full w-full flex-1 transition-all"
          style={{
            transform: `translateX(-${100 - (value || 0)}%)`,
            backgroundColor: calculateColor(value), // Apply dynamically calculated color
          }}
        />
      </ProgressPrimitive.Root>
    );
  }
);

Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
