import React from "react";

interface PlanItem {
  category: string;
  items: string[];
}

interface PlanPreviewProps {
  planText: string;
}

const parsePlans = (content: string): PlanItem[] => {
  const planRegex =
    /\[Plan\]\[(.*?)\]([\s\S]*?)(?=(\[Plan\]|\[PLAN_VIEWER_END\]|$))/g;
  const plans: PlanItem[] = [];

  let match;
  while ((match = planRegex.exec(content)) !== null) {
    const category = match[1].trim();
    const items = match[2]
      .trim()
      .split("\n")
      .map((line) => line.replace(/^[-\u2022]\s*/, "").trim())
      .filter((line) => line.length > 0);

    if (items.length > 0) {
      plans.push({ category, items });
    }
  }

  return plans;
};

const PlanPreview: React.FC<PlanPreviewProps> = ({ planText }) => {
  const plans = parsePlans(planText);

  if (plans.length === 0) {
    return (
      <div className="text-center text-gray-500">
        No hay planes para mostrar.
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {plans.map((plan, index) => (
        <div key={index} className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-primary mb-3">
            {plan.category}
          </h2>
          <ul className="list-disc list-inside space-y-1">
            {plan.items.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default PlanPreview;
