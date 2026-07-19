import { execFile } from "node:child_process";
import { mkdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { promisify } from "node:util";
import sharp from "sharp";

const run = promisify(execFile);

const photos = [
  ["pranshu", "1UUqQShZsE6e1ton1XQLwfJoajwkIBh3O"],
  ["shashwat-pankaj-singh", "1RXMD5DLnsmkx1_EEhQek2kauQI9x-I0v"],
  ["keshri-ayush", "1-Ck87rGE5hdOuXJ8uEJt87_-nfDcZwNR"],
  ["arnav-sarna", "1Tckats8BpaIy7v1X4DG2H6lv-FobNFHB"],
  ["souvik-sen", "1Q-BmWMRyG7_9iyqya7ZgdiEct3UNgIlv"],
  ["rupam-kundu", "1v5lLrAfZXn6vMntyAl2DSGGE703KQkxr"],
  ["natisha-anand", "19ez6X7O8Uwv7Rg10kGy8A7i2_cTwEO5F"],
  ["adarsh-kumar", "151prV_8JewziO39jHXMOmxVIRcfYWg4k"],
  ["aryan-adhikari", "1bQBVEUmZtQwGakQ0AGYjoY3BtoOIbAAp"],
  ["aryan-kumar", "1yXZcmFpseWUXthCkj96qN7oNDGM06JKn"],
  ["gaurav-sharma", "1WJCD65YKsRAHzpNQduz1i6wtp7FO8VxD"],
  ["mourice-lakra", "1uqV6WoRTA_cMzERdindvqRr8YoLhDzeH"],
  ["satyam-kumar", "12smHCMBeGQU0pSYu5VrDnrByK44fhDRR"],
  ["samaksh-upadhyay", "1gJeJ0jctcQfTElffkGzPsLHzcLmmcm5b"],
  ["suchand-murmu", "1Of5iWrN4QI2NwyqX10onOKU4DNxZquW6"],
  ["yash-anand", "1s-x6FZga-WwQ7-mBdH59SoBHIzc5EmqG"],
  ["ankit-kumar", "1SavYkQq-B3C2-jJEpoB1udC7a22pJxlh"],
  ["brianson-john-lakra", "1VO0NRfcZOOyF2R9kCIuLsiwOr5clToHJ"],
  ["anom-baladkar", "1CN1oX0B66NNc2lB09804R4J6vLqJYkEe"],
  ["ayush-mark-hembrom", "1mI-x947yycBjkIywEaobDda1gdgo9IeI"],
  ["shrivatsa-raj-gahoi", "1fQynzXyPLdvl22cI2vsIFURNmuVX9bZx"],
  ["atin-singh", "142OyYiHsLoT-sj1e5WV6evQjvHLl2bFU"],
  ["abhishek-kumar", "10DRxlQBAiKkHrX7DKHAuuqQQmtunSyyD"],
  ["abhinav-raj", "1Jzdotp4vKSBPsanMQ0TvqTaeLQ6H-n5O"],
  ["aarav-kumar", "1SJYWmkHVxeEKu9ic4BfuY6oLmLmhYzd7"],
  ["ashish-sharma", "1fNSUZq6A2GA2yhRHw-xaFaGCwovWn-0M"],
  ["sujal-paliwal", "18b35V8cg3DZi_mklzGqZQ8ZlCet351r-"],
  ["ketan-kumar", "1z0PcVcdFSs3wFmNU8Tq5Z1Cta86PqdcS"],
  ["naisha-bari", "1DXQWiBycpPMf1lm3SfRm3WuiYYz0L4Un"],
  ["lilit-aind", "14y0dPhSaXXuYM3-1qrnCn63AVz5V5B2Z"],
  ["koushik-raj", "1lPQ5Sy6YZQudaepua983VI7EkovXC3Sn"],
  ["satyam-shrivastav", "1T4cNW0TtK1NC2cudYBDHpesLrSo1nXqY"],
  ["manav-singh", "1R_kBnujA6mEf7AkE0ZsE-t1szbdcgFEt"],
  ["sahil-jaglan", "1gtZwyZ_vLPS2Yhkjqx8kdeA6DPIvG6LS"],
  ["vedansh-arya-oraon", "1qqAyK2GXC7Tc1KX2eLhLBDzgkvCl0vvo"],
  ["meet-porwal", "1s64cxlFMDk8tppE6KAcL-jWPMoAnofcF"],
  ["kanhaiya-kumar", "1jXdDe14Zc_1kkUn74qObyyQlAlKWLCoP"],
  ["shauryaman-singh-gaharwar", "1qNOhj6Z71fSCE5bQlRRZYxkvFbwNFCcY"],
  ["shaban-rizwi", "1s3elfngB8V20JPtYGh4IqlnlI6EQymyK"],
  ["kaushal-goel", "1EM7mEUkzGqRlQlFxj6TeD1Su5i_a9w-S"],
  ["dharitri-acharya", "1rild7_rL7ECkNlg4dY_EuD8jAgJYQ9ST"],
  ["aaditya-sah", "1r8R0Hbq4eK7NDBvcuuOVrCZg5-gEKeVu"],
  ["kumar-vaibhav", "10UHFiia5jbSFD_i7fR8lf94TIZZ86wY-"],
  ["avinash-kumar", "1Pk9Nx5h6JN2vGyUUbKiKGtZxPHwFkq0o"],
  ["abir-ray", "1xu-v7hiEGo6mlMehMSUVQUEyaWtb9laR"]
];

const outputDirectory = path.resolve("public/images/team");
await mkdir(outputDirectory, { recursive: true });

const failed = [];

for (const [slug, fileId] of photos) {
  const response = await fetch(`https://drive.google.com/uc?export=download&id=${fileId}`);
  if (!response.ok) {
    throw new Error(`Could not download ${slug}: ${response.status}`);
  }

  const source = Buffer.from(await response.arrayBuffer());
  const outputPath = path.join(outputDirectory, `${slug}.jpg`);

  try {
    await sharp(source)
      .rotate()
      .resize(720, 900, { fit: "cover", position: "attention" })
      .jpeg({ quality: 82, progressive: true })
      .toFile(outputPath);
  } catch (error) {
    const sourcePath = path.join("/tmp", `${slug}-profile-upload`);
    const decodedPath = path.join("/tmp", `${slug}-profile-upload.jpg`);

    try {
      await writeFile(sourcePath, source);
      try {
        await run("convert", [
          sourcePath,
          "-auto-orient",
          "-thumbnail",
          "720x900^",
          "-gravity",
          "center",
          "-extent",
          "720x900",
          "-quality",
          "82",
          outputPath
        ]);
      } catch {
        await run("heif-convert", [sourcePath, decodedPath]);
        await run("convert", [
          decodedPath,
          "-auto-orient",
          "-thumbnail",
          "720x900^",
          "-gravity",
          "center",
          "-extent",
          "720x900",
          "-quality",
          "82",
          outputPath
        ]);
      }
    } catch {
      failed.push(slug);
      console.error(`Could not convert ${slug}: ${error.message}`);
      continue;
    } finally {
      await rm(sourcePath, { force: true });
      await rm(decodedPath, { force: true });
    }
  }

  console.log(`Updated ${slug}.jpg`);
}

if (failed.length > 0) {
  console.error(`Missing photos: ${failed.join(", ")}`);
  process.exitCode = 1;
}
