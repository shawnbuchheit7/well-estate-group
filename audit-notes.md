# Audit: ZWSalesInfrastructure vs ZWMarketingInfrastructure

## Duplications Found
1. **Lead Intake Flow** — Both pages have the exact same 7-step flow (Website Visit → UTM → FinAI → Typeform → SF Lead → Rep Notified → Reachout). Nearly identical content.
2. **Tech Stack** (Salesforce, Typeform, Intercom) — Sales page has full tech stack section. Marketing page has it embedded in lead intake and SF architecture sections.
3. **Funnel Data** — Both pages show the same funnel numbers (48,000 visitors → 1,208 leads → 506 qualified → 334 opps → 198 demos → 142 proposals → 245 installs).
4. **Lead Source Delineation** — Both pages list the same 6-7 lead sources.
5. **Lead Scoring Criteria** — Both pages list the same scoring factors.
6. **Campaign Tracking Fields** — Both pages list UTM source/medium/campaign/content.
7. **Channel Mix** — Sales page has sourceData (Direct Sales 38%, E-Commerce 22%, etc.). Marketing page has channelMix (B2B Direct 35%, Partnerships 20%, etc.) — different percentages = contradiction.

## Contradictions Found
1. **Channel percentages** — Sales page: Direct Sales 38%, E-Commerce 22%, Partner 18%, Inbound 12%, Trade Show 6%, Social 4%. Marketing page: B2B Direct 35%, Partnerships 20%, Thought Leadership 15%, Digital 12%, Influencer 10%, Events 8%. These don't align.
2. **Funnel stage naming** — Sales: "Typeform Leads" (1,208) → "Intercom Qualified" (506). Marketing: "FinAI Engaged" (9,600) → "Typeform Submitted" (1,208) → "MQL" (506). Marketing adds a stage before Typeform that Sales doesn't have.
3. **Install count** — Both say 245 YTD but this is presented as actual data in one and target data in the other.

## What Should Live Where
### Sales Infrastructure (keep as RevOps/Analytics dashboard):
- Pipeline analytics (monthly data, rep performance, forecasting)
- Win/Loss analysis
- Sales team structure and rep KPIs
- Revenue forecasting
- Opportunity stage management (Lead → Opp → Close flow detail)

### Marketing Infrastructure (rewrite as the DEFINITIVE GTM PLAN):
- Systems Architecture (Salesforce + Typeform + Intercom + Klaviyo/Pardot + Zapier)
- Lead Funnel (one clean version — no duplication)
- Channel Execution Playbooks (6 channels with named targets)
- LOB Strategies (8 macro LOBs)
- Email Nurture Architecture (Klaviyo or Pardot — NEW)
- Influencer & Affiliate Program
- Team Accountability & Cadence

## Gaps to Fill (Marketing Plan)
1. **Email Marketing Platform** — User wants Klaviyo or Pardot for drip/nurture sequences. Neither exists anywhere currently.
2. **Nurture Sequences** — The "30-day nurture" is mentioned but never detailed. Need full email drip architecture.
3. **Systems Integration Diagram** — Need a clear visual of how ALL systems connect (SF + Typeform + Intercom + Klaviyo/Pardot + Zapier + Meta + LinkedIn)
4. **Budget Allocation** — No marketing budget breakdown exists.
5. **Timeline/Phasing** — No quarterly rollout plan exists.
