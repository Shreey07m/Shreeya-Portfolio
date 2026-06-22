# AWS S3 + CloudFront Deployment Guide

Host the portfolio as a static site on AWS with global CDN delivery.

## Architecture

```
Users → CloudFront (CDN) → S3 Bucket (static files)
```

## Prerequisites

- AWS account with CLI configured (`aws configure`)
- Domain (optional, for custom URL)

---

## Step 1: Create S3 Bucket

```bash
aws s3 mb s3://shreeya-portfolio --region ap-south-1
```

Enable static website hosting (optional if using CloudFront only):

```bash
aws s3 website s3://shreeya-portfolio \
  --index-document index.html \
  --error-document index.html
```

### Bucket Policy (for CloudFront OAC)

After creating CloudFront (Step 3), attach a bucket policy allowing CloudFront access.

---

## Step 2: Build & Upload

```bash
npm run build
aws s3 sync dist/ s3://shreeya-portfolio --delete
```

---

## Step 3: Create CloudFront Distribution

1. Open **AWS Console** → **CloudFront** → **Create Distribution**
2. **Origin domain:** Select your S3 bucket
3. **Origin access:** Origin access control settings (recommended)
4. **Default root object:** `index.html`
5. **Viewer protocol policy:** Redirect HTTP to HTTPS
6. **Custom error responses** (for SPA routing):

| HTTP Error | Response Page | HTTP Response |
|------------|---------------|---------------|
| 403 | `/index.html` | 200 |
| 404 | `/index.html` | 200 |

7. Create distribution and note the **Distribution ID**

---

## Step 4: Invalidate Cache After Deploy

```bash
aws cloudfront create-invalidation \
  --distribution-id E1234567890ABC \
  --paths "/*"
```

---

## Step 5: Custom Domain (Optional)

1. Request/import SSL certificate in **ACM** (us-east-1 for CloudFront)
2. Add alternate domain name (CNAME) in CloudFront
3. Create Route 53 alias record pointing to CloudFront

---

## GitHub Actions Automation

Add these secrets to GitHub:

| Secret | Example |
|--------|---------|
| `AWS_ACCESS_KEY_ID` | IAM user access key |
| `AWS_SECRET_ACCESS_KEY` | IAM user secret |
| `AWS_REGION` | `ap-south-1` |
| `AWS_S3_BUCKET` | `shreeya-portfolio` |
| `AWS_CLOUDFRONT_ID` | `E1234567890ABC` |

The `deploy-aws` job in `.github/workflows/deploy.yml` runs on every push to `main`.

---

## IAM Policy (Minimum Permissions)

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": ["s3:PutObject", "s3:GetObject", "s3:DeleteObject", "s3:ListBucket"],
      "Resource": [
        "arn:aws:s3:::shreeya-portfolio",
        "arn:aws:s3:::shreeya-portfolio/*"
      ]
    },
    {
      "Effect": "Allow",
      "Action": "cloudfront:CreateInvalidation",
      "Resource": "arn:aws:cloudfront::ACCOUNT_ID:distribution/DISTRIBUTION_ID"
    }
  ]
}
```

---

## Cost Estimate

| Service | Typical Monthly Cost |
|---------|---------------------|
| S3 | < $1 |
| CloudFront | < $1 (low traffic) |
| Route 53 | $0.50/hosted zone |

---

## Troubleshooting

| Issue | Fix |
|-------|-----|
| Blank page | Check S3 objects are public/OAC configured |
| 404 on routes | Add CloudFront custom error → index.html |
| Stale content | Run CloudFront invalidation |
| CORS errors | Not needed for static SPA |
