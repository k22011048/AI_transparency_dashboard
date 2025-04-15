from django.core.management.base import BaseCommand
from reports_audits.models import (
    TransparencyReport,
    AuditLog,
    Milestone,
    ComplianceStatus,
    Certification
)
from datetime import date

class Command(BaseCommand):
    help = 'Clears and populates Reports & Audits data for the dashboard'

    def handle(self, *args, **kwargs):
        # Clear existing data
        TransparencyReport.objects.all().delete()
        AuditLog.objects.all().delete()
        Milestone.objects.all().delete()
        ComplianceStatus.objects.all().delete()
        Certification.objects.all().delete()

        self.stdout.write(self.style.WARNING("Existing data cleared."))

        # 1. Transparency Reports (Score evolution)
        reports = [
            {'month': '2023-01', 'score': 62},
            {'month': '2023-03', 'score': 68},
            {'month': '2023-06', 'score': 73},
            {'month': '2023-09', 'score': 80},
            {'month': '2024-01', 'score': 88},
        ]

        for report in reports:
            TransparencyReport.objects.create(month=report['month'], score=report['score'])

        # 2. Audit Logs (Change viewer + incident response)
        logs = [
            {
                'event': "ChatGPT updated to redact sensitive entities",
                'details': "ChatGPT was re-trained with stricter filters to suppress personally identifiable information in responses."
            },
            {
                'event': "Copilot privacy policy amended",
                'details': "Copilot's privacy policy was updated to include clearer information on third-party data processors and user consent."
            },
            {
                'event': "Transparency dashboard launched for Gemini",
                'details': "Gemini's public dashboard launched with interactive audit trails, transparency scores, and regulatory documentation."
            }
        ]

        for log in logs:
            AuditLog.objects.create(
                event=log['event'],
                details=log['details']
            )

        # 3. Milestones (timeline with types)
        milestones = [
            {
                'date': date(2023, 1, 15),
                'title': 'Transparency Portal Launch',
                'description': 'Initial release of the transparency dashboard providing basic model reporting and audit logs.',
                'event_type': 'Policy Update'
            },
            {
                'date': date(2023, 3, 5),
                'title': 'Regulatory Inquiry Response for DeepSeek',
                'description': 'DeepSeek submitted formal response to GDPR regulatory inquiry regarding data handling practices.',
                'event_type': 'Regulatory Response'
            },
            {
                'date': date(2023, 5, 10),
                'title': 'Public Feedback Round for Claude',
                'description': 'Claude hosted public webinar gathering feedback on AI transparency efforts and privacy concerns.',
                'event_type': 'Public Reaction'
            }
        ]

        for milestone in milestones:
            Milestone.objects.create(
                date=milestone['date'],
                title=milestone['title'],
                description=milestone['description'],
                event_type=milestone['event_type']
            )

        # 4. Compliance Statuses (compliance dashboard)
        compliance_statuses = [
            {'regulation': 'GDPR', 'status': 'Compliant', 'last_updated': date(2023, 4, 1)},
            {'regulation': 'CCPA', 'status': 'Compliant', 'last_updated': date(2023, 4, 1)},
            {'regulation': 'HIPAA', 'status': 'Pending', 'last_updated': date(2023, 4, 1)},
        ]

        for item in compliance_statuses:
            ComplianceStatus.objects.create(
                regulation=item['regulation'],
                status=item['status'],
                last_updated=item['last_updated']
            )

        # 5. Certifications (badge display)
        certifications = [
            {
                'name': 'ISO 27001',
                'status': 'Certified',
                'issued_date': date(2023, 3, 20),
                'expiry_date': date(2026, 3, 20)
            },
            {
                'name': 'SOC 2 Type II',
                'status': 'In Progress',
                'issued_date': None,
                'expiry_date': None
            }
        ]

        for cert in certifications:
            Certification.objects.create(
                name=cert['name'],
                status=cert['status'],
                issued_date=cert['issued_date'],
                expiry_date=cert['expiry_date']
            )

        self.stdout.write(self.style.SUCCESS("Reports & Audits data population complete!"))
