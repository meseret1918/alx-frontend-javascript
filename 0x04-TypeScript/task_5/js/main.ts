// task_5/js/main.ts

// Defining MajorCredits and MinorCredits interfaces with branding
interface MajorCredits {
  credits: number;
  brand: 'Major'; // Unique property to identify MajorCredits
}

interface MinorCredits {
  credits: number;
  brand: 'Minor'; // Unique property to identify MinorCredits
}

// Function to sum MajorCredits
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: 'Major' // Return the brand for MajorCredits
  };
}

// Function to sum MinorCredits
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: 'Minor' // Return the brand for MinorCredits
  };
}

// Example usage
const math: MajorCredits = { credits: 4, brand: 'Major' };
const physics: MajorCredits = { credits: 3, brand: 'Major' };

const totalMajorCredits = sumMajorCredits(math, physics);
console.log(`Total Major Credits: ${totalMajorCredits.credits}`); // Outputs: Total Major Credits: 7

const history: MinorCredits = { credits: 2, brand: 'Minor' };
const literature: MinorCredits = { credits: 3, brand: 'Minor' };

const totalMinorCredits = sumMinorCredits(history, literature);
console.log(`Total Minor Credits: ${totalMinorCredits.credits}`); // Outputs: Total Minor Credits: 5

