"use client";
import React, { useState, useEffect } from "react";
import { IconType } from "react-icons";

const DynamicBiIcons = ({ iconName, className }: { iconName: string, className?: string }) => {
  const [IconComponent, setIconComponent] = useState<IconType>(null as any);
  useEffect(() => {
    import(`react-icons/bi`)
      .then((module) => {
        const Icon = module[iconName] as IconType;
        setIconComponent(() => Icon);
      })
      .catch((error) => {
        console.error(`Failed to import icon: ${error}`);
      });
  }, [iconName]);

  return IconComponent ? <IconComponent className={className}/> : null;
};

export default DynamicBiIcons;